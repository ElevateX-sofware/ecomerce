import ShopeeNavbar from "@/components/common/shopee-navbar";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main>
      <ShopeeNavbar />
      <div className="container mx-auto p-4">
        {children}
      </div>
    </main>
  );
}

