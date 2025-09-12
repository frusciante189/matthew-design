import Countdown from "./countdown";

export default function CountdownSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Closing Message */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            One Subscription. Unlimited Legal Protection.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Stop losing sleep over payments, fines, and contracts. Secure your
            spot today.
          </p>
        </div>

        {/* Countdown */}
        <Countdown targetDate={new Date("2025-09-25T00:00:00")} />
      </div>
    </section>
  );
}
