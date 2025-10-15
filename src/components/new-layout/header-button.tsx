import { IconExternalLink } from "@/components/icons";
import { HeaderLink } from "@/components/new-layout/header-props";
import { title as titleText } from '@/components/primitives';
import Link from "next/link";
import React from "react";

export const HeaderButton: React.FC<HeaderLink> = ({
  title,
  url,
  external = false,
  icon = <IconExternalLink />,
}) => {
  return (
    <Link href={url} target={external ? "_blank" : "_self"}>
  <div className="w-full h-full transition-all duration-150 ease-in-out bg-slate-900/60 hover:bg-cyan-700/70 border border-slate-700 hover:border-cyan-400 flex justify-center items-center gap-4 p-4 text-white hover:text-white/90 hover:shadow-lg">
        <h3 className={titleText({ size: 'md' })}>{title}</h3>
        {icon}
      </div>
    </Link>
  )
}
