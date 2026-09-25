import ImagePlaceholder from "@/components/ui/ImagePlaceholder"
import Section from "@/components/ui/Section"
import SectionHeading from "@/components/ui/SectionHeading"
import { SPONSORS, type Sponsor } from "@/data/landing"
import { cn } from "@/lib/cn"

function SponsorLogo({
  sponsor,
  className,
}: {
  sponsor: Sponsor
  className?: string
}) {
  if (sponsor.logo) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-white p-4",
          className,
        )}
      >
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    )
  }
  return (
    <ImagePlaceholder
      label={sponsor.name}
      className={cn("rounded-2xl", className)}
    />
  )
}

function TierLabel({ children }: { children: string }) {
  return (
    <h3 className="text-center text-base font-bold text-gray-600 uppercase">
      {children}
    </h3>
  )
}

/** Endless, edge-to-edge logo strip. Pauses on hover; static (scrollable) for reduced motion. */
function LogoMarquee({ items }: { items: Sponsor[] }) {
  const tile = "h-[120px] w-[120px] shrink-0 md:w-[240px]"

  return (
    <div className="group mx-[calc(50%-50vw)] overflow-hidden motion-reduce:overflow-x-auto">
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className={cn(
              "flex gap-3 pr-3",
              copy === 1 && "motion-reduce:hidden",
            )}
          >
            {items.map((sponsor) => (
              <li key={sponsor.name}>
                <SponsorLogo sponsor={sponsor} className={tile} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default function Sponsors() {
  const { official, tiers } = SPONSORS

  return (
    <Section
      id="partners"
      className="overflow-hidden bg-surface"
      containerClassName="flex flex-col gap-12"
    >
      <SectionHeading
        eyebrow={SPONSORS.eyebrow}
        title={SPONSORS.title}
        align="center"
        className="gap-5"
      />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <TierLabel>{official.label}</TierLabel>
          <ul className="flex justify-center gap-4">
            {official.items.map((sponsor) => (
              <li key={sponsor.name} className="flex-1 md:flex-none">
                <SponsorLogo
                  sponsor={sponsor}
                  className="h-[120px] w-full md:w-[240px]"
                />
              </li>
            ))}
          </ul>
        </div>

        {tiers.map((tier) => (
          <div key={tier.label} className="flex flex-col gap-4">
            <TierLabel>{tier.label}</TierLabel>
            <LogoMarquee items={tier.items} />
          </div>
        ))}
      </div>
    </Section>
  )
}
