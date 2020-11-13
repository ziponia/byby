import React from "react"
import styled from "styled-components"

export const MainStyle = styled.main``

export type PageTemplateProps = {}

export const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  return (
    <>
      <MainStyle>{props.children}</MainStyle>
    </>
  )
}
