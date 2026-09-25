import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

type SectionProps = {
  id?: string
  className?: string
  containerClassName?: string
  children: ReactNode
}

/** Full-width band with the 1240px content column used across the page. */
export default function Section({
  id,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-8 md:px-8 md:py-16 lg:px-12 lg:py-[100px]",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1240px]", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
