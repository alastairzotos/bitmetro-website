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

  useEffect(() => {
    const height = (headerRef.current?.getBoundingClientRect().height || Number.MAX_SAFE_INTEGER) - 72;

    const handleScroll = () => {
      if (!scrolledPastHeader && window.scrollY >= height) {
        setScrolledPastHeader(true);
      }

      if (scrolledPastHeader && window.scrollY < height) {
        setScrolledPastHeader(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRef.current, scrolledPastHeader]);

  const menuItemClassName = "border-1 border-slate-400 border-solid transition-bg duration-100 ease-in-out bg-black hover:bg-slate-800" + (!scrolledPastHeader ? " min-w-[33%] lg:min-w-[16.6%]" : "");

  return (
    <div className="fixed top-0 right-0 left-0 xl:m-4 z-[99999]">
      <nav className={`w-full flex justify-between border-1 transition duration-300 ease-in-out border-${scrolledPastHeader ? "transparent" : "slate-400"} border-solid`}>
        <div className={menuItemClassName + ' transition-opacity duration-300 ease-in-out'} style={{ opacity: scrolledPastHeader ? 0.6 : 1 }}>
          <Link href="/" className="w-full h-full">
            <div className="flex w-full items-center gap-4 m-4">
              <Logo />
              {!scrolledPastHeader && <span>BitMetro</span>}
            </div>
          </Link>
        </div>

        <div className={menuItemClassName}>
          <button
            className="w-full"
            onClick={() => setMenuOpen(true)}
          >
            <div className="flex justify-end items-center gap-4 m-4">
              {!scrolledPastHeader && <span>Menu</span>}
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
