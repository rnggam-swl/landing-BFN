import type { AnchorHTMLAttributes } from "react"
import { cn } from "@/lib/cn"

type Variant = "primary" | "accent" | "outline" | "outline-light"

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
}

const base =
  "relative inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-base leading-4 font-semibold whitespace-nowrap transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"

const variants: Record<Variant, string> = {
  primary: "bg-brand-gradient text-white hover:brightness-110",
  accent: "bg-accent-gradient text-white hover:brightness-110",
  outline: "hover:bg-brand-blue/5",
  "outline-light": "border-2 border-white text-white hover:bg-white/10",
}

export default function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const isOutline = variant === "outline"

  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {isOutline && (
        <span
          aria-hidden
          className="border-brand-gradient pointer-events-none absolute inset-0 rounded-[inherit]"
        />
      )}
      {isOutline ? (
        <span className="text-brand-gradient">{children}</span>
      ) : (
        children
      )}
    </a>
  )
}
