import React from "react"
import styled from "styled-components"

export const ContainerStyle = styled.div`
  width: 1100px;
  margin: auto;
`

export type ContainerProps = {}

export const Container: React.FC<ContainerProps> = (props) => {
  return <ContainerStyle>{props.children}</ContainerStyle>
}
