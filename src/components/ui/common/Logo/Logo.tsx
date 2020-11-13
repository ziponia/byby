import React from "react"
import styled from "styled-components"

export const LogoStyle = styled.h1`
  flex: 1;
  text-align: center;
`

export type LogoProps = {}

export const Logo: React.FC<LogoProps> = (props) => {
  return <LogoStyle>Logo</LogoStyle>
}
