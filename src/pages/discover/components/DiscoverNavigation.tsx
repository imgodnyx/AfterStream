import { useTranslation } from "react-i18next";

interface DiscoverNavigationProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function DiscoverNavigation({
  selectedCategory,
  onCategoryChange,
}: DiscoverNavigationProps) {
  const { t } = useTranslation();

  return (
    <div className="pb-4 w-full max-w-screen-xl mx-auto">
      <div className="relative flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["movies", "tvshows", "editorpicks"].map((category) => (
            <button
              key={category}
              type="button"
              className={`rounded-full px-4 py-2 text-sm md:text-base font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-type-link/50 ${
                selectedCategory === category
                  ? "bg-type-link text-white shadow-lg shadow-type-link/20"
                  : "bg-background-surface text-type-secondary hover:bg-background-accentA"
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {t(`discover.tabs.${category}`)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
