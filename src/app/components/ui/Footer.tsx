"use client";

import { brand, contact, navLinks, socialLinks } from "@/data/site";
import { Container } from "./Container";
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={18} />,
  Facebook: <Facebook size={18} />,
  MessageCircle: <MessageCircle size={18} />,
};

export function Footer() {
  return (
    <footer className="relative bg-deep-black marble-texture border-t border-white/5">
      {/* Gold vein decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-gold/40 to-transparent" />

      <Container className="py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-display font-semibold text-champagne-gold">
                {brand.shortName}
              </span>
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-champagne-gold/80 mb-4">
              {brand.tagline}
            </p>
            <p className="text-body-sm text-marble-ivory/50 leading-relaxed max-w-sm">
              {brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-caption uppercase tracking-[0.15em] text-marble-ivory/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-sm text-marble-ivory/60 hover:text-champagne-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-caption uppercase tracking-[0.15em] text-marble-ivory/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              {contact.persons.map((person) => (
                <li key={person.phone} className="flex items-center gap-3">
                  <Phone size={14} className="text-champagne-gold/60 shrink-0" />
                  <div>
                    <p className="text-body-sm text-marble-ivory/80">{person.name}</p>
                    <a
                      href={`tel:${person.phone}`}
                      className="text-body-sm text-champagne-gold hover:text-light-gold transition-colors"
                    >
                      {person.phone}
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-champagne-gold/60 shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-body-sm text-marble-ivory/60 hover:text-champagne-gold transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-champagne-gold/60 shrink-0 mt-1" />
                <p className="text-body-sm text-marble-ivory/60 leading-relaxed">
                  {contact.address}
                </p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <h4 className="text-caption uppercase tracking-[0.15em] text-marble-ivory/40 mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-marble-ivory/50 hover:text-champagne-gold hover:border-champagne-gold/40 transition-all duration-300"
                  aria-label={link.label}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-body-sm text-marble-ivory/40">
                Instagram: <span className="text-marble-ivory/60">{contact.instagram}</span>
              </p>
              <p className="text-body-sm text-marble-ivory/40">
                Facebook: <span className="text-marble-ivory/60">{contact.facebook}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-marble-ivory/30 tracking-wider">
            © 2026 {brand.name}. All Rights Reserved.
          </p>
          <p className="text-caption text-marble-ivory/20 tracking-wider">
            Crafted in Bangalore, India
          </p>
        </div>
      </Container>
    </footer>
  );
}
