import { Infinity, Clock } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative">
      <div className="flex flex-col gap-20">
        {/* Header Section */}
        <div className="text-center flex flex-col gap-8">
          <div className="flex justify-center">
            <div className="px-6 py-3 border-2 border-white/20 rounded-full">
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                The Difference
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent leading-tight">
            A Simple & Efficient Process to
            <br />
            Get Better Designs Done
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-normal">
            High-quality design without the headaches or hidden costs. Reliable,
            affordable, and always ready when your brand needs it most.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-fit">
          {/* World-class card with design examples - Top left spanning 2 columns */}
          <div className="lg:col-span-2 bg-primary/5 border-2 border-white/20 p-8 rounded-3xl hover:border-white/40 transition-all duration-300 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-4">
              World-class, Every time
            </h3>
            <p className="text-white/70 text-base mb-6 max-w-md">
              Unlimited access to world-class design expertise, whenever you may
              need it. Logos, brochures, social media images, websites etc...
            </p>
            <div className="absolute -bottom-4 -right-4 opacity-60">
              <div className="grid grid-cols-2 gap-2 transform rotate-12">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  WEB
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  APP
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  LOGO
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                  PRINT
                </div>
              </div>
            </div>
          </div>

          {/* Request as many designs - Right column */}
          <div className="bg-primary/5 border-2 border-white/20 p-8 rounded-3xl hover:border-white/40 transition-all duration-300 lg:row-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              Request as many designs as you need.
            </h3>
            <p className="text-white/70 text-base mb-8">
              You or your team can submit unlimited number of design requests.
              From logos to social media graphics, flyers, business cards, etc..
            </p>
            <div className="flex justify-center">
              <div className="relative">
                <Infinity className="w-20 h-20 text-primary" strokeWidth={3} />
                <div className="absolute inset-0 bg-primary w-20 h-20 rounded-full blur-xl opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Fixed Monthly Fee */}
          <div className="bg-primary/5 border-2 border-white/20 p-6 rounded-3xl hover:border-white/40 transition-all duration-300 text-center">
            <h3 className="text-lg font-bold text-white mb-4">
              Fixed Monthly Fee
            </h3>
            <p className="text-white/70 text-sm mb-6">
              No contracts. No surprises. No worries. Pay the same flat fee,
              monthly.
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-2xl font-bold">$</span>
              </div>
            </div>
          </div>

          {/* Quick Turnarounds */}
          <div className="bg-primary/5 border-2 border-white/20 p-6 rounded-3xl hover:border-white/40 transition-all duration-300 text-center">
            <h3 className="text-lg font-bold text-white mb-4">
              Quick Turnarounds
            </h3>
            <p className="text-white/70 text-sm mb-6">
              We&apos;ll deliver your designs one at a time with an average
              turnaround as quick as 48 hours.
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>

          {/* Exclusive Ownership */}
          <div className="bg-primary/5 border-2 border-white/20 p-8 rounded-3xl hover:border-white/40 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6">
              Exclusive Ownership
            </h3>
            <p className="text-white/70 text-base">
              Each design we craft for you will remain exclusively yours, with
              no strings attached.
            </p>
          </div>

          {/* Flexible & Scalable - spans 2 columns */}
          <div className="lg:col-span-2 bg-primary/5 border-2 border-white/20 p-8 rounded-3xl hover:border-white/40 transition-all duration-300 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Flexible & Scalable
              </h3>
              <p className="text-white/70 text-base max-w-md">
                As your design needs fluctuate, enjoy flexibility in scaling
                your design plan accordingly. Plus, you get to pause or cancel.
              </p>
            </div>
            <div className="hidden md:flex items-end space-x-3">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-3 h-16 bg-primary rounded-full"></div>
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-3 h-24 bg-primary rounded-full"></div>
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-3 h-12 bg-primary rounded-full"></div>
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-3 h-20 bg-primary rounded-full"></div>
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
