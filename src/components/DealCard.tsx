interface DealCardProps {
  discount: string;
  title: string;
  url: string;
  isTopOffer?: boolean;
  badge?: string;
}

/**
 * 埋点统计函数
 * 已适配 Cloudflare Worker 的 POST /track-click 接口
 */
const trackClick = async (couponId: string) => {
  try {
    // 这里的路径已从 /track 改为 /track-click 匹配 Worker 逻辑
    await fetch('/track-click', {
      method: 'POST',
      body: JSON.stringify({ couponId }),
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    // 静默失败，不影响用户跳转
    console.error('Tracking failed');
  }
};

export const DealCard = ({ 
  discount, 
  title, 
  url, 
  isTopOffer = false,
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

  return (
    <div className={`relative overflow-hidden rounded-lg border bg-card ${
      isTopOffer ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
    }`}>
      {isTopOffer && (
        <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 border-l-4 border-primary">
          Today's top offer
        </div>
      )}
      
      <div className="flex items-stretch">
        <div className={`flex flex-col items-center justify-center px-4 py-4 min-w-[80px] border-r-2 border-dashed ${
          isTopOffer ? "border-primary/30 bg-primary/5" : "border-border bg-muted/30"
        }`}>
          {isSingleLine ? (
            <span className={`text-lg font-bold leading-tight text-center ${
              isTopOffer ? "text-primary" : "text-accent"
            }`}>
              {line1}
            </span>
          ) : (
            <>
              <span className={`text-[10px] font-normal uppercase ${
                isTopOffer ? "text-primary/70" : "text-accent/70"
              }`}>
                {line1}
              </span>
              <span className={`text-lg font-bold leading-tight text-center ${
                isTopOffer ? "text-primary" : "text-accent"
              }`}>
                {line2}
              </span>
            </>
          )}
        </div>

        <div className="flex-1 flex items-center justify-between px-3 py-3 gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] px-1.5 py-0.5 rounded border border-border bg-background text-muted-foreground font-medium">
                {badge}
              </span>
            </div>
            <h3 className="font-medium text-sm leading-snug text-card-foreground line-clamp-1">
              {title}
            </h3>
          </div>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            // 点击时触发统计逻辑，传入当前优惠券的标题作为唯一 ID
            onClick={() => trackClick(title)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              isTopOffer 
                ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/30" 
                : "bg-accent/10 text-accent hover:bg-accent hover:text-white border border-accent/30"
            }`}
          >
            Redeem
          </a>
        </div>
      </div>
    </div>
  );
};
