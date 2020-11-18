import React from "react"
import styled from "styled-components"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import { ImageSliderItem } from "./ImageSliderItem"
import SlideButton from "./SlideButton"

import "pure-react-carousel/dist/react-carousel.es.css"

export const ImageSliderContainer = styled.div``

export type ImageSliderProps = {
  imageUrls?: string[]
  naturalSlideWidth?: number
  naturalSlideHeight?: number
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  imageUrls,
  naturalSlideWidth,
  naturalSlideHeight,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <CarouselProvider
        naturalSlideWidth={naturalSlideWidth}
        naturalSlideHeight={naturalSlideHeight}
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
    </div>
  )
}

ImageSlider.defaultProps = {
  imageUrls: [],
  naturalSlideWidth: 1920,
  naturalSlideHeight: 420,
}
