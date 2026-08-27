"use client";

import { useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { formFields } from "@/data/site";
import { EnquiryForm } from "./EnquiryForm";

const quickConsultationFields = formFields.consultation.filter((field) =>
  ["fullName", "phone", "email", "message"].includes(field.id)
);

interface ConsultationModalProps {
  children: ReactNode;
  className?: string;
}

export function ConsultationModal({ children, className }: ConsultationModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-deep-black/80 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-title"
            className="relative w-full max-w-2xl overflow-hidden rounded-luxury bg-charcoal p-5 shadow-cinematic sm:p-7"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close consultation form"
              className="absolute right-4 top-4 p-2 text-marble-ivory/60 transition-colors hover:text-champagne-gold"
            >
              <X size={22} />
            </button>
            <div className="mb-5 pr-8">
              <p className="text-caption uppercase tracking-[0.2em] text-champagne-gold">Urbanea Casa</p>
              <h2 id="consultation-title" className="mt-3 font-display text-display-sm text-marble-ivory">
                Book a Consultation
              </h2>
              <p className="mt-2 text-body-sm text-marble-ivory/60">
                Share a few details and our design team will be in touch.
              </p>
            </div>
            <EnquiryForm
              fields={quickConsultationFields}
              submitLabel="REQUEST A CONSULTATION"
              compact
            />
          </div>
        </div>
      )}
    </>
  );
}
