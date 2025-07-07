import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};
