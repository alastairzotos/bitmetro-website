import React from "react";
import { Header } from "@/components/new-layout/header";
import { Footer } from "@/components/new-layout/footer";
import { HeaderProps } from "@/components/new-layout/header-props";

interface Props {
  headerProps: HeaderProps;
  pad?: boolean;
}

export const GridLayout: React.FC<React.PropsWithChildren<Props>> = ({ headerProps, pad = true, children }) => {
  return (
    <div>
      <div
        className="scrolling-background"
        style={{ backgroundImage: 'url(/backgrounds/bg-3.avif)', }}
      >

      </div>
      <div className="relative xl:p-4">
        <Header {...headerProps} />

        <main className="mt-6 bg-slate-950">
          <div className={pad ? "p-2 md:p-4" : ''}>
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
