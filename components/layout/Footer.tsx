import Image from "next/image";
import Link from "next/link";
import { footerColumns, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-forest-deep pb-9 pt-[90px] text-cream/75">
      <div className="wrap">
        <div className="flex flex-wrap justify-between gap-[60px] border-b border-white/12 pb-14">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Varma Aura logo"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <span className="font-serif text-2xl tracking-[0.14em] text-cream">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-[280px] text-sm text-cream/55">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-[70px]">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h4 className="mb-[18px] text-xs font-semibold uppercase tracking-[0.1em] text-gold-soft">
                  {col.heading}
                </h4>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="mb-3 block text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
            <div>
              <h4 className="mb-[18px] text-xs font-semibold uppercase tracking-[0.1em] text-gold-soft">
                Contact
              </h4>
              <a
                href={`mailto:${site.email}`}
                className="mb-3 block text-sm text-cream/75 transition-colors hover:text-cream"
              >
                {site.email}
              </a>
              <a
                href={`https://${site.website}`}
                className="mb-3 block text-sm text-cream/75 transition-colors hover:text-cream"
              >
                {site.website}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3.5 pt-6 text-xs text-cream/40">
          <span>
            © {new Date().getFullYear()} Varma Aura, {site.address}.
          </span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
