import { useEffect, useState } from "react";

import { FooterView } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";

export function DiscoverLayout(props: {
  showBg: boolean;
  children: React.ReactNode;
}) {
  const [clearBackground, setClearBackground] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setClearBackground(window.scrollY < 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FooterView>
      <Navigation
        doBackground
        bg={props.showBg}
        clearBackground={clearBackground}
        noLightbar
      />
      <div className="mt-40 relative">{props.children}</div>
    </FooterView>
  );
}
