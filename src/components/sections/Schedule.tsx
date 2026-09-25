import { useId, useRef, useState, type KeyboardEvent } from "react"
import ButtonLink from "@/components/ui/ButtonLink"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import { SCHEDULE, type Session } from "@/data/landing"
import { cn } from "@/lib/cn"

function SessionItem({ time, title, description }: Session) {
  return (
    <li className="flex flex-col gap-4 rounded-[14px] border border-gray-200 bg-white px-5 py-4 lg:flex-row lg:gap-12">
      <p className="text-brand-gradient w-fit shrink-0 text-xs font-bold whitespace-nowrap">
        {time}
      </p>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <h3 className="text-sm font-bold text-gray-900">{title}</h3>
        <p className="text-xs text-gray-600 lg:truncate" title={description}>
          {description}
        </p>
      </div>
    </li>
  )
}

export default function Schedule() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const baseId = useId()
  const { days } = SCHEDULE
  const activeDay = days[activeIndex]

  const tabId = (index: number) => `${baseId}-tab-${index}`
  const panelId = `${baseId}-panel`

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
    event.preventDefault()
    const step = event.key === "ArrowRight" ? 1 : -1
    const next = (activeIndex + step + days.length) % days.length
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section
      id="schedule"
      containerClassName="flex flex-col gap-12 lg:flex-row"
    >
      <div className="flex flex-col items-start gap-4 lg:w-[435.5px] lg:shrink-0">
        <SectionHeading eyebrow={SCHEDULE.eyebrow} title={SCHEDULE.title} />
        <p className="text-base text-gray-600 lg:w-[440px]">{SCHEDULE.note}</p>
        <ButtonLink href={SCHEDULE.cta.href} variant="outline">
          {SCHEDULE.cta.label}
        </ButtonLink>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-4 lg:gap-8">
        <div
          role="tablist"
          aria-label="Event days"
          className="flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1"
        >
          {days.map((day, index) => {
            const selected = index === activeIndex
            return (
              <button
                key={day.label}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                id={tabId(index)}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={onTabKeyDown}
                className={cn(
                  "flex w-[154px] flex-col items-center rounded-full px-3 py-2 text-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
                  selected
                    ? "bg-brand-gradient text-white"
                    : "text-gray-600 hover:bg-gray-100",
                )}
              >
                <span className="text-sm font-semibold">{day.label}</span>
                <span className="text-xs">{day.date}</span>
              </button>
            )
          })}
        </div>

        <div id={panelId} role="tabpanel" aria-labelledby={tabId(activeIndex)}>
          {activeDay.sessions.length > 0 ? (
            <ul className="flex flex-col gap-2 lg:gap-4">
              {activeDay.sessions.map((session) => (
                <SessionItem key={session.time} {...session} />
              ))}
            </ul>
          ) : (
            <p className="rounded-[14px] border border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center text-sm text-gray-600">
              {SCHEDULE.emptyMessage}
            </p>
          )}
        </div>
      </div>
    </Section>
  )
}
