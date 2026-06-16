import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { useSearchQuery } from "@/hooks/useSearchQuery";
import { useOverlayStack } from "@/stores/interface/overlayStack";

import { DiscoverLayout } from "../layouts/DiscoverLayout";
import { FeaturedCarousel } from "./components/FeaturedCarousel";
import type { FeaturedMedia } from "./components/FeaturedCarousel";
import DiscoverContent from "./discoverContent";
import { HeroPart } from "../parts/home/HeroPart";
import { PageTitle } from "../parts/util/PageTitle";

export function Discover() {
  const { showModal } = useOverlayStack();
  const [showBg, setShowBg] = useState(false);
  const searchParams = useSearchQuery();

  const handleShowDetails = (media: FeaturedMedia) => {
    showModal("discover-details", {
      id: Number(media.id),
      type: media.type,
    });
  };

  return (
    <DiscoverLayout showBg={showBg}>
      <Helmet>
        {/* Hide scrollbar */}
        <style type="text/css">{`
            html, body {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
          `}</style>
      </Helmet>

      <div className="px-4 md:px-10">
        <PageTitle subpage k="global.pages.discover" />
      </div>

      <div className="!mt-[-170px]">
        <FeaturedCarousel
          onShowDetails={handleShowDetails}
          shorter
          forcedCategory="movies"
        >
          <HeroPart
            searchParams={searchParams}
            setIsSticky={setShowBg}
            isInFeatured
          />
        </FeaturedCarousel>
      </div>

      <div className="relative z-20 px-4 md:px-10">
        <DiscoverContent />
      </div>
    </DiscoverLayout>
  );
}
