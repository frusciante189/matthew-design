import Countdown from "./countdown";

export default function CountdownSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <Countdown targetDate={new Date("2025-09-25T00:00:00")} />
      </div>
    </section>
  );
}