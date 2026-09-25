import { useEffect, useId, useState } from "react"
import bfnLogo from "@/assets/logos/bfn.png"
import fintechIndonesiaLogo from "@/assets/logos/fintech-indonesia.png"
import globeIcon from "@/assets/icons/globe.svg"
import caretDownIcon from "@/assets/icons/caret-down.svg"
import listIcon from "@/assets/icons/list.svg"
import ButtonLink from "@/components/ui/ButtonLink"
import { LOGIN_URL, NAV_LINKS, REGISTER_URL } from "@/data/landing"

function LanguageButton() {
  // TODO: wire up once the site has an Indonesian translation.
  return (
    <button
      type="button"
      aria-label="Language: English"
      className="flex h-12 items-center gap-1 rounded-full px-3 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-brand-blue"
    >
      <img src={globeIcon} alt="" width={20} height={20} />
      <span className="text-brand-gradient text-base leading-4 font-semibold">
        EN
      </span>
      <img src={caretDownIcon} alt="" width={20} height={20} />
    </button>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-8 lg:px-12 xl:top-5">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between rounded-full bg-slate-100 py-3 pr-3 pl-4 shadow-md xl:px-5 xl:py-4">
        <a
          href="#home"
          className="flex shrink-0 items-center gap-5"
          aria-label="BFN 2026 home"
        >
          <img
            src={fintechIndonesiaLogo}
            alt="Fintech Indonesia"
            className="h-auto w-[55px] xl:w-[90px]"
          />
          <img
            src={bfnLogo}
            alt="Bulan Fintech Nasional"
            className="h-auto w-[71px] xl:w-[115px]"
          />
        </a>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base leading-6 font-medium text-black transition hover:text-brand-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <LanguageButton />
          <ButtonLink href={REGISTER_URL} className="w-[120px]">
            Register
          </ButtonLink>
          <ButtonLink href={LOGIN_URL} variant="outline" className="w-[120px]">
            Login
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-11 items-center gap-2 rounded-full pr-6 pl-7 transition hover:bg-brand-blue/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue xl:hidden"
        >
          <span
            aria-hidden
            className="border-brand-gradient pointer-events-none absolute inset-0 rounded-[inherit]"
          />
          <span className="text-brand-gradient text-base leading-4 font-semibold">
            {menuOpen ? "Close" : "Menu"}
          </span>
          <img src={listIcon} alt="" width={20} height={20} />
        </button>
      </div>

      <div
        id={menuId}
        hidden={!menuOpen}
        className="mx-auto mt-2 max-w-[1240px] rounded-3xl bg-white p-4 shadow-card xl:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-black transition hover:bg-slate-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-3 flex flex-col gap-2 border-t border-gray-200 pt-4">
          <ButtonLink href={REGISTER_URL} onClick={closeMenu}>
            Register
          </ButtonLink>
          <ButtonLink href={LOGIN_URL} variant="outline" onClick={closeMenu}>
            Login
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
