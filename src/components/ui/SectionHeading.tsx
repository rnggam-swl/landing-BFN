import type { ReactNode } from "react"
import wayangIcon from "@/assets/icons/wayang.svg"
import wayangWhiteIcon from "@/assets/icons/wayang-white.svg"
import { cn } from "@/lib/cn"

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  align?: "left" | "center"
  tone?: "default" | "inverse"
  className?: string
}

/** Eyebrow label with the wayang mark, followed by the section title. */
export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  const centered = align === "center"
  const inverse = tone === "inverse"

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <div
        className={cn(
          "flex gap-2",
          centered ? "flex-col items-center" : "w-full items-center",
        )}
      >
        <img
          src={inverse ? wayangWhiteIcon : wayangIcon}
          alt=""
          width={18}
          height={24}
          className="shrink-0"
        />
        <p
          className={cn(
            "text-2xl font-semibold",
            centered ? "w-fit" : "flex-1",
            inverse ? "text-white" : "text-brand-gradient",
          )}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className={cn(
          "w-full text-[32px] lg:text-[40px]",
          inverse
            ? "font-bold text-white"
            : "text-accent-gradient font-semibold",
        )}
      >
        {title}
      </h2>
    </div>
  )
}
