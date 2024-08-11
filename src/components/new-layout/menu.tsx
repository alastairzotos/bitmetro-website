import { CloseIcon, IconExternalLink } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface Item {
  label: string;
  href: string;
  external?: boolean;
}

interface Props {
  onClose: () => void;
}

export const Menu: React.FC<Props> = ({ onClose }) => {
  const [init, setInit] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!init) {
      setMenuOpen(true);
      setInit(true);
    }
  }, [init]);

  const handleClose = () => {
    setMenuOpen(false);
    setTimeout(onClose, 200);
  }

  const handleClickOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === bgRef.current) {
      handleClose();
    }
  }

  const navItems = Object.values(siteConfig.navItems);

  const groups: Item[][] = [
    navItems,
    [
      {
        label: 'GitHub',
        href: siteConfig.links.github,
        external: true,
      },
      {
        label: 'Contact',
        href: siteConfig.links.contact,
      }
    ]
  ];

  return (
    <div
      ref={bgRef}
      className="fixed top-0 right-0 bottom-0 left-0 bg-white/10 flex justify-end p-6"
      onClick={handleClickOut}
    >
      <div className={"border-1 border-solid border-slate-400 bg-slate-800 transition-w duration-200 ease-in-out " + (menuOpen ? "w-1/4 h-full" : "w-0 h-0")}>
        {menuOpen && (
          <>
            <div className="flex justify-end p-2">
              <button onClick={handleClose}>
                <CloseIcon size={30} />
              </button>
            </div>

            <div className="m-4">
              {groups.map((group, i) => (
                <div key={i} className="border-y-1 border-style-solid border-slate-400">
                  {group.map((item, i) => (
                    <Link href={item.href} target={item.external ? "_blank" : "_self"}>
                      <div className="flex items-center">
                        <h4 className="p-2">
                          {item.label}
                        </h4>
                        {item.external && <IconExternalLink />}
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
