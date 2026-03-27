import { Header } from "@/components/Header";
import { BrandSection } from "@/components/BrandSection";
import { WhatsAppSection } from "@/components/WhatsAppSection";
import { dealsData } from "@/data/deals";
import { Train, TrainFront, TrainTrack, Globe, Zap, Ticket } from "lucide-react";

const Index = () => {
  // --- 核心置顶逻辑函数 ---
  const getSortedDeals = (deals: any[]) => {
    return [...deals].sort((a, b) => {
      // 如果 a 是 topOffer 而 b 不是，a 排前面 (-1)
      if (a.isTopOffer && !b.isTopOffer) return -1;
      // 如果 b 是 topOffer 而 a 不是，b 排前面 (1)
      if (!a.isTopOffer && b.isTopOffer) return 1;
      return 0;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* 1. Eurostar */}
        <BrandSection
          brandName={dealsData.eurostar.brandName}
          brandIcon={<TrainFront className="w-4 h-4" />}
          brandColor={dealsData.eurostar.brandColor}
          deals={getSortedDeals(dealsData.eurostar.deals)}
          topOfferIndex={0} // 排序后，Top Offer 永远是第 0 位
        />

        {/* 2. Trainline */}
        <BrandSection
          brandName={dealsData.trainline.brandName}
          brandIcon={<Ticket className="w-4 h-4" />}
          brandColor={dealsData.trainline.brandColor}
          deals={getSortedDeals(dealsData.trainline.deals)}
          topOfferIndex={0}
        />

        {/* 3. Amtrak */}
        <BrandSection
          brandName={dealsData.amtrak.brandName}
          brandIcon={<Globe className="w-4 h-4" />}
          brandColor={dealsData.amtrak.brandColor}
          deals={getSortedDeals(dealsData.amtrak.deals)}
          topOfferIndex={0}
        />

        {/* 4. SNCF Connect */}
        <BrandSection
          brandName={dealsData.sncf.brandName}
          brandIcon={<TrainTrack className="w-4 h-4" />}
          brandColor={dealsData.sncf.brandColor}
          deals={getSortedDeals(dealsData.sncf.deals)}
          topOfferIndex={0}
        />

        {/* 5. Deutsche Bahn */}
        <BrandSection
          brandName={dealsData.deutschebahn.brandName}
          brandIcon={<Zap className="w-4 h-4" />}
          brandColor={dealsData.deutschebahn.brandColor}
          deals={getSortedDeals(dealsData.deutschebahn.deals)}
          topOfferIndex={0}
        />
      </main>

      <WhatsAppSection />

      {/* Footer */}
      <footer className="bg-muted/50 py-4 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 train.news • We may earn a commission when you use our links
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
