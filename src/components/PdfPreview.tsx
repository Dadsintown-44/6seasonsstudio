'use client';

import { useRouter } from 'next/navigation';
import PDFModal from './PDFModal';

type Props = {
  pdfPath?: string | null;
};

export default function PdfPreview({ pdfPath }: Props) {
  const router = useRouter();

  return (
    <PDFModal
      open={true}
      onClose={() => {
        router.push('/');
      }}
      pdfPath={pdfPath || undefined}
    />
  );
}