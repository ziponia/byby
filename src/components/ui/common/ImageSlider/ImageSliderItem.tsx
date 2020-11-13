import React from "react"
import Image from "next/image"
import styled from "styled-components"

export const ImageSliderItemStyle = styled.div`
  img {
  }
`

export type ImageSliderItemProps = {
  src?: string
  alt?: string
}

export const ImageSliderItem: React.FC<ImageSliderItemProps> = ({
  src,
  alt,
}) => {
  return (
    <ImageSliderItemStyle>
      <Image src={src} loading="lazy" layout="fill" />
    </ImageSliderItemStyle>
  )
}
