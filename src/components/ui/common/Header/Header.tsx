import React from "react"
import styled from "styled-components"
import { SearchInput, Logo } from "@/components/ui"
import { AiOutlineUser, FiShoppingCart } from "@/components/Icon"
import { TopNav } from "./TopNav"
import { Container } from "../Container"

export const HeaderStyle = styled.header`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 30px;
`

export type HeaderProps = {}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <TopNav />
      <Container>
        <HeaderStyle>
          <Logo />

          {/* Search wrapper */}
          <SearchInput />

          {/* Right */}
          <div style={{ flex: 1, textAlign: "right" }}>
            <a href="">
              <AiOutlineUser style={{ fontSize: "2rem" }} />
            </a>
            <a href="" style={{ marginLeft: 10 }}>
              <FiShoppingCart style={{ fontSize: "1.7rem" }} />
            </a>
          </div>
        </HeaderStyle>
      </Container>
    </>
  )
}
