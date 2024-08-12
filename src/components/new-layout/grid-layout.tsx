import React from "react";
import { Header } from "@/components/new-layout/header";
import { Footer } from "@/components/new-layout/footer";
import { HeaderProps } from "@/components/new-layout/header-props";

interface Props {
  headerProps: HeaderProps;
}

export const GridLayout: React.FC<React.PropsWithChildren<Props>> = ({ headerProps, children }) => {
  return (
    <div>
      <div
        className="scrolling-background"
        style={{ backgroundImage: 'url(/backgrounds/bg-3.avif)', }}
      >

      </div>
      <div className="relative xl:p-4">
        <Header {...headerProps} />

        <main className="p-2 md:p-4 mt-6 bg-slate-950">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}
