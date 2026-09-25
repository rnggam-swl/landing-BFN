import mapPinIcon from "@/assets/icons/map-pin.svg"
import ButtonLink from "@/components/ui/ButtonLink"
import ImagePlaceholder from "@/components/ui/ImagePlaceholder"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import { VENUE } from "@/data/landing"

export default function Venue() {
  return (
    <Section
      id="venue"
      containerClassName="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,620fr)_minmax(0,572fr)] lg:items-start"
    >
      <ImagePlaceholder
        label="Venue photo"
        className="aspect-square w-full rounded-2xl"
      />

      <div className="flex flex-col items-start gap-4">
        <SectionHeading eyebrow={VENUE.eyebrow} title={VENUE.title} />
        <p className="flex w-full items-center gap-4 rounded-full bg-gray-100 px-3 py-1">
          <img
            src={mapPinIcon}
            alt=""
            width={20}
            height={20}
            className="shrink-0"
          />
          <span className="text-brand-gradient flex-1 text-sm font-semibold">
            {VENUE.address}
          </span>
        </p>
        <p className="text-base leading-6 text-gray-600">{VENUE.intro}</p>
        <ul className="flex flex-col gap-4">
          {VENUE.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2.5 text-base leading-6 text-gray-600"
            >
              <span
                aria-hidden
                className="bg-brand-gradient mt-[7px] size-1.5 shrink-0 rounded-full"
              />
              {highlight}
            </li>
          ))}
        </ul>
        <ButtonLink href={VENUE.cta.href} variant="outline">
          {VENUE.cta.label}
        </ButtonLink>
      </div>
    </Section>
  )
}
