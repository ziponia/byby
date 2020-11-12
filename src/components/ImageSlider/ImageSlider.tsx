import React from "react"
import styled from "styled-components"
import { ImageSliderItem } from "./ImageSliderItem"

export const ImageSliderContainer = styled.div``

export type ImageSliderProps = {}

export const ImageSlider: React.FC<ImageSliderProps> = (props) => {
  return (
    <ImageSliderContainer>
      <ImageSliderItem src="https://via.placeholder.com/1024x600.png?text=Main%20Banner-1" />
      <ImageSliderItem src="https://via.placeholder.com/1024x600.png?text=Main%20Banner-2" />
      <ImageSliderItem src="https://via.placeholder.com/1024x600.png?text=Main%20Banner-3" />
      <ImageSliderItem src="https://via.placeholder.com/1024x600.png?text=Main%20Banner-4" />
    </ImageSliderContainer>
  )
}
