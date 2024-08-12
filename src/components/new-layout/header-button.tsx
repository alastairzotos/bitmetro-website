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
      <div className="w-full h-full transition-all duration-150 ease-in-out bg-slate-800/50 hover:bg-slate-800 border border-slate-600 flex justify-center items-center gap-4 p-4">
        <h3 className={titleText({ size: 'md' })}>{title}</h3>
        {icon}
      </div>
    </Link>
  )
}
