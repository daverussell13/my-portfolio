import { ReactNode } from "react";

import Navbar from "@/components/navbar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="md:my-4 transition-all duration-300">
        <div className="max-w-4xl p-6 lg:py-9 mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
