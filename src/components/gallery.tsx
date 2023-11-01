import { ProjectImage } from "@/types";
import { Image } from "@nextui-org/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface Props {
  images: ProjectImage[];
}

export const ImageGallery: React.FC<Props> = ({ images }) => {
  return (
    <Carousel
      showArrows
      infiniteLoop
      className="mt-8"
    >
      {images.map((image, index) => (
        <div key={index} className="mb-12">
          <div className="flex flex-row justify-center">
            <Image
              src={image.src}
              alt={image.description}
              style={{ maxHeight: 500 }}
            />
          </div>

          <p className="text-default-500 mt-4">{image.description}</p>
        </div>
      ))}
    </Carousel>
  )
}
