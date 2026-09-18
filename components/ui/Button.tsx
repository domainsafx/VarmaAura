"use client";

import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "outline-dark" | "gold";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-gold hover:text-forest-deep",
  outline:
    "border border-white/45 text-white hover:border-white hover:bg-white/10",
  "outline-dark":
    "border border-forest text-forest hover:bg-forest hover:text-cream",
  gold: "bg-gold text-forest-deep hover:bg-forest hover:text-cream",
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-sm px-8 py-[15px] text-sm font-medium tracking-wide transition-all duration-[400ms] ease-aura disabled:cursor-not-allowed disabled:opacity-60";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkProps = BaseProps & {
  href: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export default function Button(props: LinkProps | ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  const { href, variant: _v, className: _c, children: _ch, ...rest } =
    props as ButtonProps;

  return (
    <button {...rest} className={classes}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
