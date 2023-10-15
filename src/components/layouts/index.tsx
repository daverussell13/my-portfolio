import { ReactNode } from "react";

import NavHeader from "@/components/layouts/nav-header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <NavHeader />
      <main className="md:my-4 transition-all duration-300">
        <div className="max-w-4xl py-4 px-6 lg:p-8 md:p-6 mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
