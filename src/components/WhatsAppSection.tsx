import { Zap, Shield, Globe } from "lucide-react";

// WhatsApp SVG Logo Component
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const WhatsAppSection = () => {
  return (
    <section className="bg-muted py-6 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Product Features */}
        <h3 className="text-base font-bold text-foreground mb-4 text-center">
          Why train.news?
        </h3>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs font-medium text-foreground">Real-time Rail Deals</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs font-medium text-foreground">Verified Offers</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs font-medium text-foreground">Rail Networks Worldwide</p>
          </div>
        </div>

        {/* WhatsApp Links */}
        <div className="space-y-3">
          <a
            href="https://www.whatsapp.com/channel/0029VbCf6bD72WTzJW7KN92b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white rounded-xl px-4 py-3 hover:bg-[#22c35e] transition-colors shadow-md"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <WhatsAppLogo className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Join our Channel</p>
              <p className="text-xs text-white/80">Get instant deal alerts</p>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
              Subscribe
            </div>
          </a>
          <a
            href="https://chat.whatsapp.com/BtA5cCwGifeA1Rs91QBLT2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white rounded-xl px-4 py-3 hover:bg-[#22c35e] transition-colors shadow-md"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <WhatsAppLogo className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Join our Community</p>
              <p className="text-xs text-white/80">Connect with fellow travelers</p>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
              Join
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
