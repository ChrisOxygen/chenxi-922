"use client";

import Image from "next/image";
import { PRODUCT, PRODUCT_IMAGES } from "@/constants/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function WatchGalleryCarousel() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
      opts={{ loop: true }}
      className="w-full"
    >
      <CarouselContent className="-ml-0">
        {PRODUCT_IMAGES.WATCH_GALLERY.map((src, i) => (
          <CarouselItem key={i} className="pl-0 basis-full">
            <Image
              alt={PRODUCT.WATCH_NAME}
              src={src}
              width={1000}
              height={1000}
              sizes="100vw"
              className="w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
