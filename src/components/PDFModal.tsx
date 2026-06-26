"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  pdfPath?: string | null;
};

export default function PDFModal({ open, onClose, pdfPath }: Props) {
  const [mounted, setMounted] = useState(false);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    if (!elRef.current) {
      elRef.current = document.createElement("div");
    }
    const el = elRef.current;
    document.body.appendChild(el);
    return () => {
      if (el && el.parentNode) el.parentNode.removeChild(el);
    };
  }, []);

  useEffect(() => {
    // prevent body scroll while open
    if (!mounted) return;
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open, mounted]);

  if (!mounted || !elRef.current) return null;
  if (!open) return null;

  const src = pdfPath || "/pdf/";

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative z-10 mx-4 w-full max-w-6xl transform bg-white shadow-xl transition-all duration-500 ease-out animate-modal-in">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="text-sm font-semibold">Preview PDF</h3>
          <button
            onClick={onClose}
            aria-label="Close PDF preview"
            className="ml-4 rounded bg-slate-100 px-3 py-1 text-sm text-slate-700 hover:bg-slate-200"
          >
            Close
          </button>
        </div>

        <div className="h-[75vh] w-full overflow-hidden bg-slate-800">
          <iframe
            src={src}
            title="PDF Preview"
            className="h-full w-full border-0 bg-white"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes modalIn {
          from { transform: translateY(10px) scale(.98); opacity: 0 }
          to { transform: translateY(0) scale(1); opacity: 1 }
        }
        .animate-modal-in { animation: modalIn 260ms ease-out forwards }
      `}</style>
    </div>
  );

  return createPortal(modal, elRef.current);
}
