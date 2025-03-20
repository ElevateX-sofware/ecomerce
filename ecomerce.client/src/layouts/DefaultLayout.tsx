import ShopeeNavbar from "@/components/common/shopee-navbar";
import { ReactNode, useState } from "react";

declare global {
  interface Window {
    scrollTimeout?: number;
  }
}

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout((window).scrollTimeout);
    (window).scrollTimeout = window.setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <main>
      <ShopeeNavbar />
      <div
        className={`container-100 overflow-auto ${isScrolling ? '' : 'scrollbar-hide'}`}
        onScroll={handleScroll}
      >
        {children}
      </div>
    </main>
  );
}

// Add the following CSS to your global stylesheet or a CSS module
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }
// .scrollbar-hide {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */

// Custom scrollbar styles
// .container-100::-webkit-scrollbar {
//   width: 12px;
// }
// .container-100::-webkit-scrollbar-track {
//   background: #f1f1f1;
// }
// .container-100::-webkit-scrollbar-thumb {
//   background: #888;
//   border-radius: 6px;
// }
// .container-100::-webkit-scrollbar-thumb:hover {
//   background: #555;
// }


