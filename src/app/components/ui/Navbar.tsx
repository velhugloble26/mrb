"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { brand, navLinks } from "@/data/site";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { ConsultationModal } from "./ConsultationModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury",
          scrolled
            ? "bg-deep-black/95 backdrop-blur-xl border-b border-white/5 shadow-elevated"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <span className="text-2xl md:text-3xl font-display font-semibold text-champagne-gold tracking-tight">
                {brand.shortName}
              </span>
              <span className="hidden md:block h-5 w-px bg-champagne-gold/30" />
              <span className="hidden md:block text-xs uppercase tracking-[0.2em] text-marble-ivory/60 font-light">
                {brand.name}
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-caption uppercase tracking-[0.15em] text-marble-ivory/70 hover:text-champagne-gold transition-colors duration-300 gold-underline py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <ConsultationModal
                className="hidden md:inline-flex items-center px-6 py-2.5 text-caption uppercase tracking-[0.15em] border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold/10 hover:border-champagne-gold transition-all duration-400"
              >
                Book a Consultation
              </ConsultationModal>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-marble-ivory/80 hover:text-champagne-gold transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-deep-black/98 backdrop-blur-2xl transition-all duration-500 ease-luxury lg:hidden",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-display-sm font-display text-marble-ivory/90 hover:text-champagne-gold transition-colors duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <ConsultationModal
            className="mt-6 px-8 py-3 text-caption uppercase tracking-[0.15em] border border-champagne-gold text-champagne-gold hover:bg-champagne-gold/10 transition-all duration-400"
          >
            Book a Consultation
          </ConsultationModal>
        </div>
      </div>
    </>
  );
}
