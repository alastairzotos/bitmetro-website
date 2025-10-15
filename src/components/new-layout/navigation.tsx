import { HamburgerIcon, Logo } from "@/components/icons";
import { Menu } from "@/components/new-layout/menu";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  headerRef: React.RefObject<HTMLDivElement>;
}

export const Navigation: React.FC<Props> = ({ headerRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledPastHeader, setScrolledPastHeader] = useState(false);
  const [scrolledFirstThird, setScrolledFirstThird] = useState(false);

  useEffect(() => {
    const height = (headerRef.current?.getBoundingClientRect().height || Number.MAX_SAFE_INTEGER);

    const handleScroll = () => {
      if (!scrolledPastHeader && window.scrollY >= height - 72) {
        setScrolledPastHeader(true);
      }

      if (scrolledPastHeader && window.scrollY < height - 72) {
        setScrolledPastHeader(false);
      }

      if (!scrolledFirstThird && window.scrollY >= height / 3 - 72) {
        setScrolledFirstThird(true);
      }

      if (scrolledFirstThird && window.scrollY < height / 3 - 72) {
        setScrolledFirstThird(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRef.current, scrolledPastHeader, scrolledFirstThird]);

  const menuItemClassName =
    "border border-slate-700 bg-slate-900/80 hover:bg-slate-800/80 shadow-lg transition-all duration-500 ease-in-out" +
    (!scrolledPastHeader
      ? " min-w-[33%] lg:min-w-[16.6%] px-6 py-2"
      : " min-w-[56px] lg:min-w-[56px] px-6 py-2");

  return (
    <div className="fixed top-0 right-0 left-0 xl:m-4 z-[99999]">
      <nav className={`w-full flex justify-between border-1 transition duration-300 ease-in-out border-${scrolledFirstThird ? "transparent" : "slate-400"} border-solid`}>
        <div className={menuItemClassName + ' flex items-center transition-all duration-500 ease-in-out'} style={{ opacity: scrolledFirstThird ? 0.6 : 1 }}>
          <Link href="/" className="w-full h-full">
            <div className="flex w-full items-center gap-4">
              <Logo />
              <span
                className={
                  "inline-block transition-all duration-500 ease-in-out ml-2" +
                  (scrolledPastHeader
                    ? " max-w-0 opacity-0 text-[0px]"
                    : " max-w-[120px] opacity-100 text-lg")
                }
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                Bitmetro
              </span>
            </div>
          </Link>
        </div>

        <div className={menuItemClassName + ' flex items-center transition-all duration-500 ease-in-out'}>
          <button
            className="w-full"
            onClick={() => setMenuOpen(true)}
          >
            <div className="flex justify-end items-center gap-4">
              <span
                className={
                  "inline-block transition-all duration-500 ease-in-out mr-2" +
                  (scrolledPastHeader
                    ? " max-w-0 opacity-0 text-[0px]"
                    : " max-w-[80px] opacity-100 text-lg")
                }
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                Menu
              </span>
              <HamburgerIcon />
            </div>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <Menu onClose={() => setMenuOpen(false)} />
      )}
    </div>
  )
}
