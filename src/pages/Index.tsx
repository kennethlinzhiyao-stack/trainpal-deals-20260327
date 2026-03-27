import { Header } from "@/components/Header";
import { BrandSection } from "@/components/BrandSection";
import { WhatsAppSection } from "@/components/WhatsAppSection";
import { dealsData } from "@/data/deals";
import { Train, TrainFront, TrainTrack, Globe, Zap, Ticket, Shield, CheckCircle, TrendingUp } from "lucide-react";

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
      
      <main className="max-w-md mx-auto px-3 py-4 sm:px-4 sm:py-6">
        {/* 1. Trainpal */}
        <BrandSection
          brandName={dealsData.trainpal.brandName}
          brandIcon={<Train className="w-4 h-4" />}
          brandColor={dealsData.trainpal.brandColor}
          brandDescription={dealsData.trainpal.brandDescription}
          deals={getSortedDeals(dealsData.trainpal.deals)}
          topOfferIndex={0}
        />

        {/* 2. AVANTI WEST COAST */}
        <BrandSection
          brandName={dealsData.avanti.brandName}
          brandIcon={<TrainFront className="w-4 h-4" />}
          brandColor={dealsData.avanti.brandColor}
          brandDescription={dealsData.avanti.brandDescription}
          deals={getSortedDeals(dealsData.avanti.deals)}
          topOfferIndex={-1}
        />

        {/* 3. LNER */}
        <BrandSection
          brandName={dealsData.lner.brandName}
          brandIcon={<Zap className="w-4 h-4" />}
          brandColor={dealsData.lner.brandColor}
          brandDescription={dealsData.lner.brandDescription}
          deals={getSortedDeals(dealsData.lner.deals)}
          topOfferIndex={-1}
        />

        {/* 4. MyVoucherCodes */}
        <BrandSection
          brandName={dealsData.myvouchercodes.brandName}
          brandIcon={<Ticket className="w-4 h-4" />}
          brandColor={dealsData.myvouchercodes.brandColor}
          brandDescription={dealsData.myvouchercodes.brandDescription}
          deals={getSortedDeals(dealsData.myvouchercodes.deals)}
          topOfferIndex={-1}
        />

        {/* 5. GWR */}
        <BrandSection
          brandName={dealsData.gwr.brandName}
          brandIcon={<TrainTrack className="w-4 h-4" />}
          brandColor={dealsData.gwr.brandColor}
          brandDescription={dealsData.gwr.brandDescription}
          deals={getSortedDeals(dealsData.gwr.deals)}
          topOfferIndex={-1}
        />

        {/* Why Train.news? Section */}
        <div className="mt-6 mb-3 bg-gradient-to-r from-slate-50/80 to-slate-100/60 rounded-2xl border border-slate-200/50 backdrop-blur-sm px-4 py-4">
          <h2 className="text-center text-[16px] font-extrabold text-slate-800 mb-3">Why Train.news?</h2>
          <div className="flex justify-around">
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-1.5 shadow-sm">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-[10px] text-slate-600 font-semibold">Trusted</span>
              <span className="text-[8px] text-slate-500 mt-0.5 text-center">Reliable sources</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center mb-1.5 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-[10px] text-slate-600 font-semibold">Verified</span>
              <span className="text-[8px] text-slate-500 mt-0.5 text-center">Daily checked</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mb-1.5 shadow-sm">
                <TrendingUp className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-[10px] text-slate-600 font-semibold">Top Deals</span>
              <span className="text-[8px] text-slate-500 mt-0.5 text-center">Best savings</span>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppSection />

      {/* Footer */}
      <footer className="bg-muted/50 py-4 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-1">
          <p className="text-xs text-muted-foreground">
            © 2026 Train.news
          </p>
          <p className="text-[10px] text-muted-foreground/80">
            All deals verified • Terms apply
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
