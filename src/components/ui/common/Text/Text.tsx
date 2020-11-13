import React from "react"
import styled from "styled-components"

export const TextStyle = styled.p`
  font-size: 12px;
  color: #333333;
`

export type TextProps = {
  variant?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small"
}

export const Text: React.FC<TextProps> = (props) => {
  return <TextStyle as={props.variant}>{props.children}</TextStyle>
}

Text.defaultProps = {
  variant: "p",
}
