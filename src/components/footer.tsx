import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-tertiary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left side - Main content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              One Subscription.<br />
              Unlimited Designs.
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Secure a Founding Member spot.
            </p>
            
            {/* Email signup */}
            <div className="relative max-w-md">
              <input
                type="email"
                className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full bg-black/30 backdrop-blur-sm placeholder:text-white/60 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200"
                placeholder="your.email@domain.com"
              />
              <button className="font-medium cursor-pointer text-white flex items-center gap-1 absolute -right-1 top-0 bg-primary hover:bg-primary/80 h-full px-6 rounded-full transition-all duration-200 text-base">
                <ChevronRight size={18} />
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Right side - Company info */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">DesignBell</span>
              <span className="text-2xl">🔔</span>
            </div>
            
            {/* Company details */}
            <div className="space-y-2 text-white/60">
              <p className="text-sm">©2025 DesignBell LLC</p>
              <p className="text-sm">Headquartered in Wyoming, US</p>
            </div>
            
            {/* Links */}
            <div className="space-y-2 pt-4">
              <a href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Terms of service
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}