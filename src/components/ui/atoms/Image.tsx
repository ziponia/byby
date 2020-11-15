import React, { DetailedHTMLProps } from "react"
import styled from "styled-components"

const Img = styled.img``

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {}

export const Image: React.FC<ImageProps> = (props) => {
  return <Img {...props} />
}
