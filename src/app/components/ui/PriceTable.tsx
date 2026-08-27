"use client";

import { cn } from "@/lib/utils";

interface PriceItem {
  label: string;
  value: string;
}

interface PriceTableProps {
  items: PriceItem[];
  className?: string;
  highlightLast?: boolean;
}

export function PriceTable({ items, className, highlightLast = false }: PriceTableProps) {
  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            "flex items-center justify-between py-4 border-b border-white/5",
            index === items.length - 1 && highlightLast && "border-b-0"
          )}
        >
          <span className="text-body-sm text-marble-ivory/50 uppercase tracking-wider">
            {item.label}
          </span>
          <span
            className={cn(
              "text-body-md font-medium",
              index === items.length - 1 && highlightLast
                ? "text-champagne-gold text-lg"
                : "text-marble-ivory/90"
            )}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
