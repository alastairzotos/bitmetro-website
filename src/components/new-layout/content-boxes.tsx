import React, { forwardRef } from 'react';
import { title as titleText } from "@/components/primitives";
import { HeaderProps } from '@/components/new-layout/header-props';
import { HeaderButton } from '@/components/new-layout/header-button';

// eslint-disable-next-line react/display-name
export const ContentBoxes = forwardRef<HTMLDivElement, HeaderProps>(({ title, content, links }, ref) => (
  <div ref={ref} className="relative w-full h-full grid grid-cols-2 grid-rows-3">
    <div className="border-1 border-solid border-slate-400 col-span-2 lg:col-span-1 row-span-2 lg:row-span-3">
      <div className="flex items-end lg:items-center p-6 w-full h-full min-h-[400px]">
        <h1 className={titleText({ size: 'lg' })}>{title}</h1>
      </div>
    </div>

    <div className="border-1 border-solid border-slate-400 col-span-2 lg:col-span-1 row-span-1 lg:row-span-3">
      <div className="grid grid-cols-3 grid-rows-1 lg:grid-rows-3 w-full h-full">
        <div className="col-span-2 lg:row-start-2 p-6 flex flex-col justify-center">
          {content}
        </div>
        <div className="lg:row-start-2 flex flex-col">
          {links.map((link, i) => (
            <div key={i} style={{ height: `${100 / links.length}%` }}>
              <HeaderButton {...link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
));
