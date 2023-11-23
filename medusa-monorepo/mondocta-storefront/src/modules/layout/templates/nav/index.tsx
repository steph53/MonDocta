"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import LinkNav from "@modules/layout/components/link-nav"

const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY2 = () => {
        if (window.scrollY > (window.innerHeight)*0.95) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY2)

      return () => {
        window.removeEventListener("scroll", detectScrollY2)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "relative h-16 px-8 mx-auto transition-colors bg-transparent  border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
          {
            " ": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            },{
              " custom-invert !bg-clip-text": !isHome || isScrolled,
            }
          )}
        >
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden small:items-center small:flex h-full">
              <Link href="/" className="text-xl-semi uppercase">
                <Image src={"/logo.webp"} width={200} height={100} alt={"MonDocta"} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-around items-center small:hidden h-full">
            <Link href="/" className="text-xl-semi uppercase h-fit">
              MonDocta
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <LinkNav link="/" text="Home" />
              <LinkNav link="/contact-us" text="Contact Us" />
              <LinkNav link="/" text="About" />
              <LinkNav link="/account" text="Account"/>
            </div>
            {/*<CartDropdown />*/}
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
