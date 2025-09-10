import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const logos = [
  "/marquee/logo1.avif",
  "/marquee/logo2.avif",
  "/marquee/logo3.avif",
  "/marquee/logo4.avif",
  "/marquee/logo5.avif",
  "/marquee/logo6.avif",
];

const LogoCard = ({ logoSrc }: { logoSrc: string }) => {
  return (
    <div className="flex items-center justify-center h-16 w-40 mx-4">
      <img
        src={logoSrc}
        alt="Company logo"
        className="max-h-12 max-w-32 object-contain filter invert"
      />
    </div>
  );
};

export function LogoMarquee() {
  return (
    <div className="relative flex w-full lg:max-w-[1200px] mx-auto flex-col items-center justify-center overflow-hidden">
      <div
        className="flex flex-col w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {logos.map((logo, index) => (
            <LogoCard key={index} logoSrc={logo} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
