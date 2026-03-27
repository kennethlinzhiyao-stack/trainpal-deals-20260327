import { cn } from "@/lib/utils";

interface DealCardProps {
  discount: string;
  title: string;
  url: string;
  isTopOffer?: boolean;
  isHighValue?: boolean;
  badge?: string;
}

const trackClick = async (couponId: string) => {
  try {
    await fetch('/track-click', {
      method: 'POST',
      body: JSON.stringify({ couponId }),
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error('Tracking failed');
  }
};

export const DealCard = ({
  discount,
  title,
  url,
  isTopOffer = false,
  isHighValue = false,
  badge = "Deal"
}: DealCardProps) => {
  const hasUpTo = discount.toUpperCase().includes("UP TO");

  let line1 = "";
  let line2 = "";
  let isSingleLine = false;

  if (hasUpTo) {
    line1 = "UP TO";
    line2 = discount.replace(/UP TO\s*/i, "").trim();
  } else {
    isSingleLine = true;
    line1 = discount;
  }

  const buttonText = "Claim";

  return (
    <div className="relative">
      {isHighValue && (
        <div className="absolute -top-2 -left-2 z-50 animate-pulse">
          <span className="inline-flex items-center rounded-full bg-red-600 px-2 py-0.5 text-[9px] font-extrabold text-white shadow-lg">
            High Value
          </span>
        </div>
      )}
      <div className={cn(
        "coupon-card group relative overflow-hidden rounded-xl border bg-white",
        "transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:z-10",
        isTopOffer
          ? "border-[#FF6B35]/35 shadow-[0_12px_34px_rgba(0,0,0,0.10)]"
          : "border-border shadow-[0_8px_22px_rgba(0,0,0,0.06)]",
        isTopOffer ? "md:scale-[1.02]" : "",
        "hover:-translate-y-1.5 hover:scale-[1.02]",
        "hover:shadow-[0_12px_30px_rgba(255,111,60,0.2)]"
      )}>
        {isTopOffer && (
          <div className="absolute right-2 top-2 z-20 animate-pulse">
            <span className="inline-flex items-center rounded-full bg-red-600 px-2 py-0.5 text-[9px] font-semibold text-white shadow-lg shadow-red-500/30">
              🔥 Hot
            </span>
          </div>
        )}

        <div className="flex items-stretch">
          <div className={cn(
            "flex flex-col items-center justify-center px-2 py-4 w-[68px] sm:w-[80px] relative overflow-hidden transition-all duration-500 flex-shrink-0",
            "relative",
            isTopOffer
              ? "bg-gradient-to-br from-orange-50/40 to-orange-50/30 group-hover:from-orange-50/60 group-hover:to-orange-50/50"
              : "bg-gradient-to-br from-slate-50 to-white/80 group-hover:from-slate-100 group-hover:to-slate-50"
          )}>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col items-center justify-center leading-none">
              {!isSingleLine && (
                <span className="text-[8px] font-extrabold uppercase text-[#FF6B35]/90 mb-0.5 transition-all duration-500 whitespace-nowrap">
                  {line1}
                </span>
              )}
              <span className="text-base sm:text-lg font-extrabold leading-none text-center text-[#FF6B35] whitespace-nowrap transition-all duration-500 group-hover:scale-110">
                {isSingleLine ? line1 : line2}
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center px-3 sm:px-4 py-5 relative min-w-0">
            <div className="flex-1 min-w-0 pr-3">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[9px] px-2 py-0.5 rounded-full font-semibold text-slate-600 bg-white/70 border border-slate-200 backdrop-blur-sm whitespace-nowrap">
                  {badge}
                </span>
              </div>
              <h3 className="text-[12px] font-semibold text-[#4A5568] truncate transition-all duration-300 group-hover:text-[#FF6B35] leading-tight">
                {title}
              </h3>
            </div>
            <div className="flex-shrink-0">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick(title)}
                className={cn(
                  "claim-button h-9 flex items-center justify-center rounded-full text-[12px] font-extrabold transition-all duration-300 ease-out",
                  "bg-gradient-to-r from-[#FF6B35] to-orange-500 text-white",
                  "hover:scale-105 active:scale-95 hover:shadow-[0_10px_20px_rgba(255,107,53,0.25)]",
                  "shadow-sm"
                )}
                style={{ width: '6.75rem' }}
              >
                <span className="relative z-10 flex items-center gap-1">
                  {buttonText}
                  <svg className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
