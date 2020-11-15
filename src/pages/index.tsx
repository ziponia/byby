import React from "react"
import { KubyNextPageProps } from "../interface/core"
import { PageTemplate, ImageSlider, Container } from "@/components/ui"
import { ProductItem, ProductList } from "@/components/ui"

export type Props = {}

const IndexPage: KubyNextPageProps<Props> = (props) => {
  return (
    <PageTemplate>
      <ImageSlider
        imageUrls={[
          "https://via.placeholder.com/1920x420.png?text=Main%20Banner-1",
          "https://via.placeholder.com/1920x420.png?text=Main%20Banner-2",
          "https://via.placeholder.com/1920x420.png?text=Main%20Banner-3",
        ]}
      />
      <div style={{ marginTop: 40, marginBottom: 40 }} />
      <Container>
        <ProductList>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductList>
      </Container>
    </PageTemplate>
  )
}

export default IndexPage
