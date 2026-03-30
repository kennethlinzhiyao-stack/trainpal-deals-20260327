import headerBg from "@/assets/海上列车.jpg";

export const Header = () => {
  return (
    <header
      className="relative py-10 px-4 bg-cover"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundPosition: 'center 66.67%'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-2xl mx-auto text-center text-white">
        <div className="mb-2">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-rose-200 via-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl [text-shadow:_0_2px_10px_rgba(251,191,36,0.3)]">
            Train.news
          </h1>
          <div className="mx-auto mt-1 h-0.5 w-32 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </div>
        <p className="text-white/90 text-xs font-medium max-w-xs mx-auto leading-relaxed">
          Exclusive train deals & discounts, curated daily
        </p>
        <div className="mt-3 flex items-center justify-center gap-4 text-sm text-white font-semibold">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            <span>Live Updates</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
            <span>Verified Deals</span>
          </div>
        </div>
      </div>
    </header>
  );
};
