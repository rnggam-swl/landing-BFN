import HoverFrame from "@/components/ui/HoverFrame"
import ImagePlaceholder from "@/components/ui/ImagePlaceholder"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import { EXPERIENCES, type Experience } from "@/data/landing"

function ExperienceCard({ title, description, image }: Experience) {
  return (
    <article className="group relative flex h-[440px] flex-col gap-10 overflow-hidden rounded-2xl bg-white transition-shadow duration-200 hover:shadow-card">
      <div className="flex flex-col gap-4 p-8">
        <h3 className="text-brand-gradient text-2xl font-semibold">{title}</h3>
        <p className="text-base leading-6 text-gray-600">{description}</p>
      </div>
      {image ? (
        <img
          src={image}
          alt=""
          className="min-h-0 w-full flex-1 object-cover"
        />
      ) : (
        <ImagePlaceholder className="min-h-0 flex-1" />
      )}
      <HoverFrame restingBorder="border-gray-100" />
    </article>
  )
}

export default function Experiences() {
  return (
    <Section className="bg-surface" containerClassName="flex flex-col gap-12">
      <SectionHeading
        eyebrow={EXPERIENCES.eyebrow}
        title={EXPERIENCES.title}
        className="gap-5 lg:max-w-[801px]"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {EXPERIENCES.items.map((item) => (
          <ExperienceCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  )
}
