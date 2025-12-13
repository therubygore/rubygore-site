'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
}

interface CoverflowCarouselProps {
  images: CarouselImage[];
}

export default function CoverflowCarousel({ images }: CoverflowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Show 5 items at a time: 2 hidden, 2 sides, 1 center
  const getVisibleImages = () => {
    const visible: Array<{ image: CarouselImage; position: number; index: number }> = [];
    for (let i = -2; i <= 2; i++) {
      const idx = (currentIndex + i + images.length) % images.length;
      visible.push({
        image: images[idx],
        position: i + 3, // 1, 2, 3, 4, 5
        index: idx,
      });
    }
    return visible;
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {getVisibleImages().map((item) => (
          <Image
            key={item.index}
            src={item.image.src}
            alt={item.image.alt}
            width={320}
            height={480}
            className={`carousel-item carousel-item-${item.position}`}
            unoptimized
          />
        ))}
        <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev}>
          ‹
        </button>
        <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
          ›
        </button>
      </div>
    </div>
  );
}

