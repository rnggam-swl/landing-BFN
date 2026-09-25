import bfnLogo from "@/assets/logos/bfn.png"
import ButtonLink from "@/components/ui/ButtonLink"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import { ABOUT } from "@/data/landing"

export default function About() {
  return (
    <Section
      id="about"
      containerClassName="flex flex-col items-start gap-12 lg:flex-row lg:justify-center lg:gap-16 xl:gap-[200px]"
    >
      <img
        src={bfnLogo}
        alt="BFN — Bulan Fintech Nasional"
        className="h-auto w-[260px] shrink-0 md:w-[400px] lg:w-[36%] xl:w-[400px]"
      />
      <div className="flex flex-col items-start gap-4 lg:max-w-[595px] lg:flex-1">
        <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
        <p className="text-base leading-6 text-gray-600">{ABOUT.body}</p>
        <ButtonLink
          href={ABOUT.cta.href}
          variant="outline"
          className="w-[140px]"
        >
          {ABOUT.cta.label}
        </ButtonLink>
      </div>
    </Section>
  )
}
