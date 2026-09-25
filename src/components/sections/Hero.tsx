import bfnFestLogo from "@/assets/logos/bfn-fest.png"
import calendarIcon from "@/assets/icons/calendar.svg"
import mapPinIcon from "@/assets/icons/map-pin-white.svg"
import ButtonLink from "@/components/ui/ButtonLink"
import { EVENT, HERO_VIDEO, REGISTER_URL } from "@/data/landing"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

type InfoCardProps = {
  icon: string
  label: string
  value: string
}

function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <li className="flex items-center gap-3 rounded-2xl bg-white/12 px-3.5 py-4 text-left backdrop-blur-md">
      <span className="flex shrink-0 rounded-full bg-white/20 p-2.5">
        <img src={icon} alt="" width={20} height={20} />
      </span>
      <span className="flex flex-col">
        <span className="text-xs font-medium whitespace-nowrap uppercase">
          {label}
        </span>
        <span className="font-jakarta text-sm leading-5 font-extrabold whitespace-nowrap">
          {value}
        </span>
      </span>
    </li>
  )
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[721px] items-center justify-center overflow-hidden bg-brand-navy px-4 pt-[115px] pb-10 lg:min-h-[800px] lg:pt-[144px]"
    >
      <video
        key={reducedMotion ? "static" : "motion"}
        className="absolute inset-0 -z-20 size-full object-cover"
        src={HERO_VIDEO.src}
        poster={HERO_VIDEO.poster}
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-brand-navy/80" />

      <div className="flex w-full max-w-[328px] flex-col items-center gap-6 text-center text-white md:max-w-[632px]">
        <img
          src={bfnFestLogo}
          alt="BFN Fest — Bulan Fintech Nasional"
          className="h-auto w-[322px] max-w-full md:w-[560px]"
        />
        <h1 className="font-display text-[22px] leading-none uppercase md:text-[40px]">
          {EVENT.tagline}
        </h1>
        <ul className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
          <InfoCard icon={calendarIcon} {...EVENT.period} />
          <InfoCard icon={mapPinIcon} {...EVENT.flagship} />
        </ul>
        <p className="text-base leading-6">{EVENT.summary}</p>
        <div className="flex gap-4">
          <ButtonLink
            href={REGISTER_URL}
            variant="accent"
            className="w-[140px] md:w-[160px]"
          >
            Register Now
          </ButtonLink>
          <ButtonLink
            href="#about"
            variant="outline-light"
            className="w-[140px] md:w-[160px]"
          >
            About Event
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
