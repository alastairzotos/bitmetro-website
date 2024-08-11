import React, { useRef, forwardRef } from "react";
import { Navigation } from "@/components/new-layout/navigation";
import { title as titleText } from "@/components/primitives";

export interface HeaderProps {
  title: string;
  content: React.ReactNode;
}


const GridBoxes: React.FC = () => (
  <div className="absolute hidden sm:block top-0 left-0 bottom-0 right-0">
    <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-3 w-full h-full">
      <div className="w-full border-dashed border-1 border-slate-800" />
      <div className="w-full border-dashed border-1 border-slate-800" />
      <div className="w-full border-dashed border-1 border-slate-800" />
      <div className="w-full border-dashed border-1 border-slate-800" />
      <div className="w-full border-dashed border-1 border-slate-800" />
      <div className="w-full border-dashed border-1 border-slate-800" />
      <div className="w-full border-dashed border-1 border-slate-800" />
      <div className="w-full border-dashed border-1 border-slate-800" />
      <div className="w-full border-dashed border-1 border-slate-800" />
      <div className="w-full border-dashed border-1 border-slate-800 hidden lg:block" />
      <div className="w-full border-dashed border-1 border-slate-800 hidden lg:block" />
      <div className="w-full border-dashed border-1 border-slate-800 hidden lg:block" />
      <div className="w-full border-dashed border-1 border-slate-800 hidden lg:block" />
      <div className="w-full border-dashed border-1 border-slate-800 hidden lg:block" />
      <div className="w-full border-dashed border-1 border-slate-800 hidden lg:block" />
      <div className="w-full border-dashed border-1 border-slate-800 hidden lg:block" />
      <div className="w-full border-dashed border-1 border-slate-800 hidden lg:block" />
      <div className="w-full border-dashed border-1 border-slate-800 hidden lg:block" />
    </div>
  </div>
);

const ContentBoxes = forwardRef<HTMLDivElement, HeaderProps>(({ title, content }, ref) => (
  <div ref={ref} className="relative w-full h-full grid grid-cols-2 grid-rows-3">
    <div className="border-1 border-solid border-slate-400 col-span-2 row-span-2 lg:col-span-1 lg:row-span-3">
      <div className="flex items-end lg:items-center p-6 w-full h-full">
        <h1 className={titleText({ size: 'lg' })}>{title}</h1>
      </div>
    </div>

    <div className="border-1 border-solid border-slate-400 col-span-2 row-span-1 lg:col-span-1 lg:row-span-3">
      <div className="flex items-start lg:items-center p-6 w-full h-full">
        {content}
      </div>
    </div>
  </div>
))

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
