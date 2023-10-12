import { ReactNode } from "react";

import NavHeader from "@/components/layouts/nav-header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <NavHeader />
      <main className="max-w-[1024px] mx-auto md:mt-4 transition-all duration-300">
        <div className="max-w-[854px] p-6 sm:p-8 mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
