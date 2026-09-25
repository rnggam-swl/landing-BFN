import bfnWhiteLogo from "@/assets/logos/bfn-white.png"
import fintechIndonesiaWhiteLogo from "@/assets/logos/fintech-indonesia-white.png"
import { FOOTER } from "@/data/landing"

export default function Footer() {
  return (
    <footer className="bg-midnight px-4 py-8 md:px-8 lg:px-12 lg:py-[60px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-8 border-b-[0.8px] border-white/20 pb-6 xl:flex-row xl:gap-[200px]">
          <div className="flex shrink-0 flex-col">
            <div className="flex items-center gap-5">
              <img
                src={fintechIndonesiaWhiteLogo}
                alt="Fintech Indonesia"
                className="h-auto w-[94px]"
              />
              <img
                src={bfnWhiteLogo}
                alt="Bulan Fintech Nasional"
                className="h-auto w-[114px]"
              />
            </div>
            <p className="w-[250px] pt-3.5 text-[12.8px] leading-[19.84px] text-white/80">
              {FOOTER.address}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:flex-1 xl:grid-cols-[auto_auto_216px_216px] xl:justify-between"
          >
            {FOOTER.columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-bold tracking-[0.625px] text-white uppercase">
                  {column.title}
                </h2>
                <ul className="mt-3.5 flex flex-col gap-2.5 pb-2.5 xl:pb-0">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm leading-[21px] font-medium text-white/58 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs leading-[18.6px] text-white/80">
            {FOOTER.copyright}
          </p>
          <ul className="flex gap-2.5">
            {FOOTER.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.name}
                  className="flex size-[34px] items-center justify-center rounded-full border-[0.8px] border-white/20 text-[11px] text-white/80 transition hover:border-white/60 hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
