import React from "react"
import styled from "styled-components"

export const ProductListWrapper = styled.ul`
  &:before,
  &:after {
    display: block;
    content: "";
    clear: both;
  }

  li {
    list-style-type: none;
    float: left;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 20px;
    width: 25%;
  }
`

export type ProductListProps = {
  children: React.ReactNode[]
}

export const ProductList: React.FC<ProductListProps> = ({ children }) => {
  if (!children) throw new Error("props children is required.")

  return (
    <ProductListWrapper>
      {React.Children.map(children, (child) => {
        return <li>{React.cloneElement(child as any)}</li>
      })}
    </ProductListWrapper>
  )
}
