import React from "react"
import { KubyNextPageProps } from "../interface/core"
import {
  PageTemplate,
  ImageSlider,
  Header,
  Gnb,
  Container,
  Footer,
} from "@/components/ui"
import { ProductItem } from "@/components/product/ProductItem"

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

      <Container></Container>
    </PageTemplate>
  )
}

export default IndexPage
