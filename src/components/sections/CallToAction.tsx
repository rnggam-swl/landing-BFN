import ButtonLink from "@/components/ui/ButtonLink"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import { CALL_TO_ACTION, REGISTER_URL } from "@/data/landing"

export default function CallToAction() {
  return (
    <Section
      className="bg-brand-gradient"
      containerClassName="flex flex-col items-center gap-12 text-center"
    >
      <div className="flex flex-col items-center gap-4">
        <SectionHeading
          eyebrow={CALL_TO_ACTION.eyebrow}
          title={CALL_TO_ACTION.title}
          align="center"
          tone="inverse"
        />
        <p className="max-w-[780px] text-base leading-6 text-white">
          {CALL_TO_ACTION.body}
        </p>
      </div>
      <ButtonLink href={REGISTER_URL} variant="accent" className="w-[160px]">
        Register Now
      </ButtonLink>
    </Section>
  )
}
