import React from "react"
import styled from "styled-components"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import { ImageSliderItem } from "./ImageSliderItem"
import SlideButton from "./SlideButton"
import { FiArrowLeftCircle, FiArrowRightCircle } from "@/components/Icon"

import "pure-react-carousel/dist/react-carousel.es.css"

export const ImageSliderContainer = styled.div``

export type ImageSliderProps = {
  imageUrls?: string[]
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrls }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={1920}
      naturalSlideHeight={420}
      totalSlides={imageUrls.length}
    >
      <div style={{ position: "relative" }}>
        <Slider>
          {imageUrls.map((image, index) => (
            <Slide key={index} index={index}>
              <ImageSliderItem src={image} />
            </Slide>
          ))}
        </Slider>
        {imageUrls.length > 0 && (
          <>
            <SlideButton.Back />
            <SlideButton.Next />
          </>
        )}
      </div>
    </CarouselProvider>
  )
}

ImageSlider.defaultProps = {
  imageUrls: [],
}
