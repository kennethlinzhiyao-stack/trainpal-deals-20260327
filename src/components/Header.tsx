import { Train } from "lucide-react";
import headerBg from "@/assets/header-bg.jpg";

export const Header = () => {
  return (
    <header
      className="relative py-6 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-2xl mx-auto text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Train className="w-6 h-6" />
          <h1 className="text-xl font-bold tracking-tight">
            train.news
          </h1>
        </div>
        <p className="text-white/90 text-sm">
          Your gateway to the best train deals
        </p>
      </div>
    </header>
  );
};
