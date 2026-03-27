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
  brandDescription?: string;
  deals: Deal[];
  topOfferIndex?: number;
}

export const BrandSection = ({
  brandName,
  brandIcon,
  brandColor,
  brandDescription,
  deals,
  topOfferIndex = 0,
}: BrandSectionProps) => {
  // 按折扣额度从大到小排序
  const parseDiscountValue = (discount: string): number => {
    const upperDiscount = discount.toUpperCase();
    const numberMatch = upperDiscount.match(/\d+/);
    if (!numberMatch) return 0;

    const number = parseInt(numberMatch[0], 10);

    if (upperDiscount.includes('%')) {
      return number;
    }

    if (upperDiscount.includes('£')) {
      return number * 0.5;
    }


    return number;
  };

  const sortedDeals = [...deals].sort((a, b) => {
    const valueA = parseDiscountValue(a.discount);
    const valueB = parseDiscountValue(b.discount);
    return valueB - valueA;
  });

  return (
    <section className="mb-3">
      <div className="flex items-center gap-2 mb-2 px-1 py-1">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-sm flex-shrink-0"
          style={{ backgroundColor: brandColor }}
        >
          {brandIcon}
        </div>
        <div className="flex-1">
          <h2 className="text-[13px] font-semibold text-slate-700">{brandName}</h2>
        </div>
        {brandDescription && (
          <div className="flex-shrink-0">
            <span className="block text-[10px] text-slate-500 whitespace-nowrap text-right ml-2">
              {brandDescription}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        {sortedDeals.map((deal, index) => (
          <DealCard
            key={index}
            discount={deal.discount}
            title={deal.title}
            url={deal.url}
            badge={deal.badge}
            isTopOffer={index === topOfferIndex}
            isHighValue={deal.isHighValue}
          />
        ))}
      </div>
    </section>
  );
};
