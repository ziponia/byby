import React from "react"
import styled from "styled-components"
import NextImage from "next/image"

export const ProductItemStyle = styled.figure`
  position: relative;
  width: 350px;
  height: 390px;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;

  .thumbnail-prd {
    flex: 1;
    object-fit: contain;
  }
  figcaption {
    height: 200px;
  }
`

export type ProductItemProps = {}

export const ProductItem: React.FC<ProductItemProps> = (props) => {
  const _Thumbnail = () => {}

  return (
    <ProductItemStyle>
      <NextImage
        src={
          "https://via.placeholder.com/300x600.jpg/0000FF?text=product+image"
        }
        loading="lazy"
        width={350}
        height={900}
        layout="responsive"
        className="thumbnail-prd"
      />
      <figcaption>
        <p>adsf</p>
      </figcaption>
    </ProductItemStyle>
  )
}
