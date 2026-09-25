import ButtonLink from "@/components/ui/ButtonLink"
import HoverFrame from "@/components/ui/HoverFrame"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import { SPEAKERS, type Speaker } from "@/data/landing"

function SpeakerCard({ name, role, photo }: Speaker) {
  return (
    <article className="group relative h-[400px] w-[283px] shrink-0 snap-start overflow-hidden rounded-[14px] bg-[linear-gradient(140.78deg,#1c60e8_7.735%,#040b1f_92.265%)] transition-shadow duration-200 hover:shadow-card xl:w-auto">
      {photo && (
        <img
          src={photo}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 flex min-h-[112px] flex-col justify-center gap-2 rounded-t-3xl bg-white px-6 py-4">
        <h3 className="text-2xl font-semibold text-ink">{name}</h3>
        <p className="text-xs font-medium text-gray-600">{role}</p>
      </div>
      <HoverFrame restingBorder="border-gray-200" />
    </article>
  )
}

export default function Speakers() {
  return (
    <Section
      id="speakers"
      containerClassName="flex flex-col items-start gap-6 lg:items-center lg:gap-12"
    >
      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow={SPEAKERS.eyebrow}
          title={SPEAKERS.title}
          className="lg:w-[435.5px]"
        />
        <p className="text-base leading-6 text-gray-600 lg:w-[440px] lg:leading-normal">
          {SPEAKERS.intro}
        </p>
      </div>

      {/* Swipeable, edge-to-edge row until there is room for the 4-column grid. */}
      <div className="no-scrollbar -mx-4 -my-6 flex w-[calc(100%+2rem)] snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 py-6 md:-mx-8 md:w-[calc(100%+4rem)] md:scroll-px-8 md:px-8 lg:-mx-12 lg:w-[calc(100%+6rem)] lg:scroll-px-12 lg:px-12 xl:m-0 xl:grid xl:w-full xl:grid-cols-4 xl:gap-9 xl:overflow-visible xl:p-0">
        {SPEAKERS.items.map((speaker) => (
          <SpeakerCard key={speaker.name} {...speaker} />
        ))}
      </div>

      <ButtonLink href={SPEAKERS.cta.href} variant="outline">
        {SPEAKERS.cta.label}
      </ButtonLink>
    </Section>
  )
}
