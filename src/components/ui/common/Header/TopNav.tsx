import React from "react"
import styled from "styled-components"

export const TopNavStyle = styled.nav`
  display: flex;
  padding: 20px 20px;
  & > ul {
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
      <ul>{props.children}</ul>
    </TopNavStyle>
  )
}
