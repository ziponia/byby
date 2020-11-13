import React from "react"
import { KubyNextPageProps } from "../interface/core"
import { PageTemplate, ImageSlider, Header, Gnb } from "@/components/ui"

export type Props = {}

const IndexPage: KubyNextPageProps<Props> = (props) => {
  return (
    <PageTemplate>
      <Header />
      <Gnb />
      <ImageSlider
        imageUrls={[
          "https://via.placeholder.com/1920x420.png?text=Main%20Banner-1",
          "https://via.placeholder.com/1920x420.png?text=Main%20Banner-2",
          "https://via.placeholder.com/1920x420.png?text=Main%20Banner-3",
        ]}
      />
    </PageTemplate>
  )
}

export default IndexPage
