import React from "react"
import { PageTemplate } from "@/templates/Layout"
import { Header, TopNav, Gnb } from "@/components/ui"
import { TopNavItem } from "@/components/ui/organisms/TopNav/TopNavItem"
import { ImageSlider } from "@/components/ImageSlider"

export type IndexTemplateProps = {}

export const IndexTemplate: React.FC<IndexTemplateProps> = (props) => {
  return (
    <PageTemplate>
      <TopNav>
        <TopNavItem title="로그인" href="/" />
        <TopNavItem title="회원가입" href="/" />
        <TopNavItem title="주문조회" href="/" />
        <TopNavItem title="고객센터" href="/" />
      </TopNav>
      <Header />
      <Gnb />
      <ImageSlider />
    </PageTemplate>
  )
}
