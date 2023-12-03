"use client";

import Image from "next/image";
import { Carousel } from "flowbite-react";

const imgs = [
  {
    src: "/img1.jpg",
    alt: "img1",
  },
  {
    src: "/img2.png",
    alt: "img2",
  },
  {
    src: "/img3.jpg",
    alt: "img3",
  },
  {
    src: "/img4.jpg",
    alt: "img4",
  },
  
];

export default function DeafultCarousel() {
  return (
    <Carousel>
      {imgs.map((img, idx) => (
        <Image
          src={img.src}
          alt={img.alt}
          width={0}
          height={0}
          sizes="100vw"
          key={idx}
        />
      ))}
    </Carousel>
  );
}
