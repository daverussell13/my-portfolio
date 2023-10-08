import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <header>
        <div className="max-w-6xl mx-auto bg-green-300">navbar</div>
      </header>
      <main className="max-w-[854px] mx-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
