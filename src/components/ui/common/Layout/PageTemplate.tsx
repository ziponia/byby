import React from "react"
import styled from "styled-components"
import { Footer } from "../Footer"
import { Gnb } from "../Gnb"
import { Header } from "../Header"

export const MainStyle = styled.main``

export type PageTemplateProps = {}

export const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  return (
    <>
      <Header />
      <Gnb />
      <MainStyle>{props.children}</MainStyle>
      <Footer />
    </>
  )
}
