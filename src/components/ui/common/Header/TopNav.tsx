import React from "react"
import styled from "styled-components"
import { TopNavItem } from "./TopNavItem"
import { Container } from "@/components/ui"

export const TopNavStyle = styled.nav`
  display: flex;
  padding: 20px 20px;
  margin: auto;

  & ul {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    width: 100%;
  }
`

export type TopNavProps = {}

export const TopNav: React.FC<TopNavProps> = (props) => {
  return (
    <TopNavStyle>
      <Container>
        <ul>
          <TopNavItem title="로그인" href="/" />
          <TopNavItem title="회원가입" href="/" />
          <TopNavItem title="주문조회" href="/" />
          <TopNavItem title="고객센터" href="/" />
        </ul>
      </Container>
    </TopNavStyle>
  )
}
