import React, { useRef, forwardRef } from "react";
import { Navigation } from "@/components/new-layout/navigation";
import { GridBoxes } from "@/components/new-layout/grid-boxes";
import { ContentBoxes } from "@/components/new-layout/content-boxes";
import { HeaderProps } from "@/components/new-layout/header-props";

export const Header: React.FC<HeaderProps> = (props) => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header>
      <div className="relative w-full aspect-square lg:aspect-[2/1]">
        <GridBoxes />

        <ContentBoxes ref={headerRef} {...props} />

        <Navigation headerRef={headerRef} />
      </div>
    </header>
  )
}

export default Header;
