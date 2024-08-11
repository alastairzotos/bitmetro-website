import React, { forwardRef } from 'react';
import { title as titleText } from "@/components/primitives";
import { HeaderProps } from '@/components/new-layout/header-props';

// eslint-disable-next-line react/display-name
export const ContentBoxes = forwardRef<HTMLDivElement, HeaderProps>(({ title, content }, ref) => (
  <div ref={ref} className="relative w-full h-full grid grid-cols-2 grid-rows-3">
    <div className="border-1 border-solid border-slate-400 col-span-2 lg:col-span-1 row-span-2 lg:row-span-3">
      <div className="flex items-end lg:items-center p-6 w-full h-full">
        <h1 className={titleText({ size: 'lg' })}>{title}</h1>
      </div>
    </div>

    <div className="border-1 border-solid border-slate-400 col-span-2 lg:col-span-1 row-span-1 lg:row-span-3">
      <div className="flex items-start lg:items-center p-6 w-full h-full">
        {content}
      </div>
    </div>
  </div>
));
