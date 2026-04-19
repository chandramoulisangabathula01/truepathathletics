"use client";

import Link from "next/link";
import Image from "next/image";
import { Camera as Instagram, Play as Youtube, Send as Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background-mid dark:bg-background-deep border-t border-black/[0.05] dark:border-white/5 pt-20 pb-10 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Block */}
          <div className="space-y-6">
            <Link href="/" className="group relative flex h-10 items-center justify-start gap-2 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo/logo_truepath.png"
                alt="True Path Logo"
                width={240}
                height={80}
                className="h-full w-auto object-contain"
              />
            </Link>
            <p className="text-text-soft text-sm leading-relaxed">
              A guidance system for athletes and parents. Built around stages, not shortcuts.
            </p>
            <p className="text-text-main font-serif italic text-lg opacity-80 decoration-accent-lime/40 decoration-wavy underline underline-offset-8">
              "Talent is not the problem. The path is."
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-accent-lime mb-8">Navigate</h4>
            <ul className="space-y-4">
              {["Home", "For Parents", "The True Path Journey™", "How We Guide"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-text-soft hover:text-text-main transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-accent-lime mb-8">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-text-soft hover:text-text-main transition-colors text-sm">
                <Mail className="w-4 h-4 text-accent-lime" />
                info@truepathathletics.com
              </li>
              <li className="flex items-center gap-3 text-text-soft hover:text-text-main transition-colors text-sm">
                <Phone className="w-4 h-4 text-accent-lime" />
                (555) 123-4567
              </li>
              <li>
                <Link href="/contact" className="text-accent-lime text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all mt-4">
                  Understand Your Athlete's Stage <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-accent-lime mb-8">Follow</h4>
            <div className="flex gap-4">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-accent-lime hover:text-white hover:border-accent-lime transition-all text-text-main">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-black/[0.05] dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-soft text-xs">
            © 2026 True Path Athletics. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-text-soft hover:text-text-main text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-text-soft hover:text-text-main text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
