import { redirect } from 'next/navigation';

export default async function PdfPage() {
  redirect('/pdf/corporate.pdf');
}
