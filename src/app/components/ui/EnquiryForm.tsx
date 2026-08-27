"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Send, CheckCircle } from "lucide-react";

interface FormField {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

interface EnquiryFormProps {
  fields: FormField[];
  submitLabel?: string;
  className?: string;
  light?: boolean;
  compact?: boolean;
}

export function EnquiryForm({
  fields,
  submitLabel = "REQUEST A CONSULTATION",
  className,
  light = false,
  compact = false,
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-champagne-gold mb-6" />
        <h3 className="font-display text-display-sm text-marble-ivory mb-3">
          Thank You
        </h3>
        <p className="text-body-md text-marble-ivory/60 max-w-md">
          Our team will reach out to you shortly to discuss your requirements.
        </p>
      </div>
    );
  }

  const inputBase = cn(
    "w-full rounded-luxury px-5 py-3.5 text-body-sm bg-transparent border transition-all duration-300 outline-none",
    light
      ? "border-charcoal/20 text-charcoal placeholder:text-charcoal/30 focus:border-champagne-gold"
      : "border-white/10 text-marble-ivory placeholder:text-marble-ivory/30 focus:border-champagne-gold/60"
  );

  return (
    <form onSubmit={handleSubmit} className={cn(compact ? "space-y-4" : "space-y-6", className)}>
      <div className={cn("grid grid-cols-1 md:grid-cols-2", compact ? "gap-3 sm:gap-4" : "gap-6")}>
        {fields.map((field) => (
          <div
            key={field.id}
            className={field.type === "textarea" ? (compact ? "col-span-2" : "md:col-span-2") : "min-w-0"}
          >
            <label
              className={cn(
                "block text-caption uppercase tracking-[0.1em] mb-2.5",
                light ? "text-charcoal/60" : "text-marble-ivory/40"
              )}
            >
              {field.label}
              {field.required && <span className="text-champagne-gold ml-1">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                name={field.id}
                rows={4}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                className={cn(inputBase, "resize-none", compact && "px-3 py-2.5")}
              />
            ) : field.type === "select" ? (
              <select
                name={field.id}
                required={field.required}
                onChange={handleChange}
                className={cn(inputBase, "cursor-pointer appearance-none", compact && "px-3 py-2.5")}
                defaultValue=""
              >
                <option value="" disabled>
                  Select...
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                className={cn(inputBase, compact && "px-3 py-2.5")}
              />
            )}
          </div>
        ))}
      </div>
      <Button
        type="submit"
        variant="gold"
        size="lg"
        fullWidth
        icon={<Send size={16} />}
        className="mt-4"
      >
        {submitLabel}
      </Button>
    </form>
  );
}
