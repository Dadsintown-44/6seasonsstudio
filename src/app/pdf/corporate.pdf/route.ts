const DRIVE_FOLDER_ID = '1U2Q_4NsyeyyGk3WIpnGHJXq6kmSxMbOl';
const TARGET_FILE_NAME = 'corporate.pdf';

function getDriveApiKey() {
  return process.env.GOOGLE_DRIVE_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY || '';
}

function getCorporatePdfUrl() {
  return process.env.GOOGLE_DRIVE_CORPORATE_PDF_URL || process.env.NEXT_PUBLIC_GOOGLE_DRIVE_CORPORATE_PDF_URL || '';
}

function getCorporatePdfFileId() {
  return process.env.GOOGLE_DRIVE_CORPORATE_PDF_FILE_ID || process.env.NEXT_PUBLIC_GOOGLE_DRIVE_CORPORATE_PDF_FILE_ID || '';
}

function buildFileListUrl(apiKey: string) {
  const url = new URL('https://www.googleapis.com/drive/v3/files');
  url.searchParams.set(
    'q',
    `'${DRIVE_FOLDER_ID}' in parents and name = '${TARGET_FILE_NAME}' and trashed = false`
  );
  url.searchParams.set('fields', 'files(id,name,mimeType,modifiedTime)');
  url.searchParams.set('supportsAllDrives', 'true');
  url.searchParams.set('includeItemsFromAllDrives', 'true');
  url.searchParams.set('key', apiKey);
  return url;
}

function buildDirectDownloadUrl(fileId: string) {
  const url = new URL('https://drive.google.com/uc');
  url.searchParams.set('export', 'download');
  url.searchParams.set('id', fileId);
  return url;
}

function buildDownloadUrl(fileId: string, apiKey: string) {
  const url = new URL(`https://www.googleapis.com/drive/v3/files/${fileId}`);
  url.searchParams.set('alt', 'media');
  url.searchParams.set('supportsAllDrives', 'true');
  url.searchParams.set('key', apiKey);
  return url;
}

async function streamPdf(response: Response) {
  if (!response.ok || !response.body) {
    return new Response('Unable to download PDF from Google Drive.', {
      status: 502,
    });
  }

  const headers = new Headers();
  headers.set('Content-Type', response.headers.get('content-type') || 'application/pdf');
  headers.set('Content-Disposition', 'inline; filename="corporate.pdf"');
  headers.set('Cache-Control', 'no-store');

  const contentLength = response.headers.get('content-length');
  if (contentLength) {
    headers.set('Content-Length', contentLength);
  }

  return new Response(response.body, {
    status: 200,
    headers,
  });
}

export async function GET() {
  const directUrl = getCorporatePdfUrl();
  if (directUrl) {
    return streamPdf(
      await fetch(directUrl, {
        cache: 'no-store',
      })
    );
  }

  const fileId = getCorporatePdfFileId();
  if (fileId) {
    return streamPdf(
      await fetch(buildDirectDownloadUrl(fileId), {
        cache: 'no-store',
      })
    );
  }

  const apiKey = getDriveApiKey();

  if (!apiKey) {
    return new Response(
      'Missing Google Drive config for /pdf/corporate.pdf. Set GOOGLE_DRIVE_CORPORATE_PDF_URL to a direct Drive download/share URL, GOOGLE_DRIVE_CORPORATE_PDF_FILE_ID to the file id, or GOOGLE_DRIVE_API_KEY to enable folder lookup.',
      { status: 500 }
    );
  }

  const listResponse = await fetch(buildFileListUrl(apiKey), {
    cache: 'no-store',
  });

  if (!listResponse.ok) {
    return new Response('Unable to read Google Drive folder.', {
      status: 502,
    });
  }

  const listData = (await listResponse.json()) as {
    files?: Array<{ id: string; name: string; mimeType?: string }>;
  };

  const pdfFile = listData.files?.find(
    (file) => file.name.toLowerCase() === TARGET_FILE_NAME
  );

  if (!pdfFile) {
    return new Response('corporate.pdf was not found in the Drive folder.', {
      status: 404,
    });
  }

  const downloadResponse = await fetch(buildDownloadUrl(pdfFile.id, apiKey), {
    cache: 'no-store',
  });

  return streamPdf(downloadResponse);
}