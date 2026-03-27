import { DealCard } from "./DealCard";
import { ReactNode } from "react";

interface Deal {
  discount: string;
  title: string;
  url: string;
  badge?: string;
}

interface BrandSectionProps {
  brandName: string;
  brandIcon: ReactNode;
  brandColor: string;
  deals: Deal[];
  topOfferIndex?: number;
}

export const BrandSection = ({
  brandName,
  brandIcon,
  brandColor,
  deals,
  topOfferIndex = 0,
}: BrandSectionProps) => {
  return (
    <section className="mb-4">
      {/* Compact Brand Header */}
      <div className="flex items-center gap-2 mb-2 px-1">
        <div 
          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: brandColor }}
        >
          {brandIcon}
        </div>
        <h2 className="text-sm font-bold text-foreground">{brandName}</h2>
        <span className="text-[10px] text-muted-foreground">
          {deals.length} offers
        </span>
      </div>

      {/* Deals List */}
      <div className="space-y-2">
        {deals.map((deal, index) => (
          <DealCard
            key={index}
            discount={deal.discount}
            title={deal.title}
            url={deal.url}
            badge={deal.badge}
            isTopOffer={index === topOfferIndex}
          />
        ))}
      </div>
    </section>
  );
};
