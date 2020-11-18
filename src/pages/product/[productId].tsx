import { Container, ImageSlider, PageTemplate } from "@/components/ui"
import { KubyNextPageProps } from "@/interface/core"
import { NextPageContext } from "next"
import React from "react"

type Props = {}

const ProductDetail: KubyNextPageProps<Props> = (props) => {
  return (
    <PageTemplate>
      <Container>
        {/* 상품 타이틀 */}
        <div style={{ paddingTop: 20 }}>
          <h1>상품 제목</h1>
        </div>

        {/* row */}
        <div style={{ display: "flex" }}>
          {/* left box */}
          <div style={{ flex: 1, height: 300 }}>
            <ImageSlider
              naturalSlideWidth={300}
              naturalSlideHeight={300}
              imageUrls={[
                "https://via.placeholder.com/500x500.png?text=Main%20Banner-1",
                "https://via.placeholder.com/500x500.png?text=Main%20Banner-2",
                "https://via.placeholder.com/500x500.png?text=Main%20Banner-3",
              ]}
            />
          </div>
          {/* right box */}
          <div style={{ flex: 1 }}>
            {/* 세일가 */}
            <p>32%</p>

            {/* 정가 */}
            <p>54,000원</p>

            {/* 할인가 */}
            <p>34,500원</p>

            {/* 배송 */}
            <p>3000원</p>
          </div>
        </div>
      </Container>
    </PageTemplate>
  )
}

ProductDetail.getInitialProps = async (ctx: NextPageContext) => {
  const { productId } = ctx.query as {
    productId: string
  }

  return {}
}

export default ProductDetail
