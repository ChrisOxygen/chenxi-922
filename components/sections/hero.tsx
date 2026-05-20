import CountdownTimer from "@/components/countdown-timer";
import PricingCTA from "@/components/ui/pricing-cta";
import { PRODUCT, PRODUCT_IMAGES } from "@/constants/product";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-y-p relative overflow-hidden">
      <Image
        src="/assets/imgi_32_c6394fd3321f2c821dd854de5eaa9e67.webp"
        fill
        priority
        alt=""
        className="object-cover object-top"
        sizes="100vw"
      />
      <div className="absolute opacity-75 inset-0 pointer-events-none bg-brand-primary z-1" />
      <div className="absolute inset-0 bg-background [clip-path:polygon(0_51%,100%_69%,100%_100%,0%_100%)] z-2" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center flex-col gap-8">
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline font-semibold text-center text-background">
          {PRODUCT.HEADLINE}
        </h1>
        <p className="max-w-3xl text-background text-base sm:text-xl md:text-2xl font-semibold italic text-center">
          {PRODUCT.SUBTITLE}
        </p>
        <CountdownTimer />
        <PricingCTA variant="hero" location="hero" />
        <Image
          alt={PRODUCT.NAME}
          src={PRODUCT_IMAGES.HERO}
          width={2000}
          height={2000}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 896px"
          className="rounded aspect-square sm:aspect-video object-cover"
        />
      </div>
    </section>
  );
}
