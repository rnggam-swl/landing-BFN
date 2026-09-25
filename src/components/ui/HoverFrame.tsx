import { cn } from "@/lib/cn"

type HoverFrameProps = {
  /** Resting border colour, e.g. "border-gray-100". */
  restingBorder: string
}

/**
 * Card border overlay: a thin grey border at rest that swaps to the 2px brand
 * gradient ring when the parent `.group` is hovered or focused (Figma "Variant2").
 */
export default function HoverFrame({ restingBorder }: HoverFrameProps) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] border transition-opacity duration-200 group-focus-within:opacity-0 group-hover:opacity-0",
          restingBorder,
        )}
      />
      <span
        aria-hidden
        className="border-brand-gradient pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100"
      />
    </>
  )
}
