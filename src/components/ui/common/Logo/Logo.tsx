import React from "react"
import styled from "styled-components"
import Link from "next/link"

export const LogoStyle = styled.a`
  flex: 1;
  text-align: left;
`

export type LogoProps = {}

export const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link href="/">
      <LogoStyle href="/">
        <h1>Logo</h1>
      </LogoStyle>
    </Link>
  )
}
