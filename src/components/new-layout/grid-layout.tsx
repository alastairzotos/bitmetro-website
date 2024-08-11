import React from "react";
import { Header, HeaderProps } from "@/components/new-layout/header";
import { Footer } from "@/components/new-layout/footer";

interface Props {
  headerProps: HeaderProps;
}

export const GridLayout: React.FC<React.PropsWithChildren<Props>> = ({ headerProps, children }) => {
  return (
    <div className="relative xl:p-4">
      <Header {...headerProps}/>

      <main className="p-4 mt-6">
        {children}
      </main>

      <Footer/>
    </div>
  )
}
