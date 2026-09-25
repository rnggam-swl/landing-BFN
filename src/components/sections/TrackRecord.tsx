import { useState } from "react"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import { TRACK_RECORD } from "@/data/landing"
import { cn } from "@/lib/cn"

const { stats } = TRACK_RECORD
const DEFAULT_ACTIVE = stats.length - 1

export default function TrackRecord() {
  // The last stat is highlighted by default; hovering moves the highlight.
  const [active, setActive] = useState(DEFAULT_ACTIVE)

  return (
    <Section containerClassName="flex flex-col gap-12">
      <SectionHeading
        eyebrow={TRACK_RECORD.eyebrow}
        title={TRACK_RECORD.title}
      />
      <dl
        onMouseLeave={() => setActive(DEFAULT_ACTIVE)}
        className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-slate-50 lg:flex-row"
      >
        {stats.map((stat, index) => {
          const isActive = index === active
          return (
            <div
              key={stat.label}
              onMouseEnter={() => setActive(index)}
              className={cn(
                "flex min-w-[140px] flex-col-reverse items-start gap-4 p-6 lg:flex-1 xl:whitespace-nowrap",
                index < stats.length - 1 &&
                  "lg:border-r-[0.8px] lg:border-gray-200",
                isActive && "bg-brand-gradient",
              )}
            >
              <dt
                className={cn(
                  "text-sm font-semibold",
                  isActive ? "text-white" : "text-gray-600",
                )}
              >
                {stat.label}
              </dt>
              <dd
                className={cn(
                  "text-[32px] font-extrabold",
                  isActive ? "text-white" : "text-brand-gradient",
                )}
              >
                {stat.value}
              </dd>
            </div>
          )
        })}
      </dl>
    </Section>
  )
}
