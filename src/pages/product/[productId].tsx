import { PageTemplate } from "@/components/ui"
import { KubyNextPageProps } from "@/interface/core"
import { NextPageContext } from "next"
import React from "react"

type Props = {}

const ProductDetail: KubyNextPageProps<Props> = (props) => {
  return <PageTemplate></PageTemplate>
}

ProductDetail.getInitialProps = async (ctx: NextPageContext) => {
  const { productId } = ctx.query as {
    productId: string
  }

  return {}
}

export default ProductDetail
