import React from "react"
import styled from "styled-components"
import { Text } from "ui"

export type TopNavItemProps = {
  title?: string
  href?: string
}

export const TopNavItemStyle = styled.li`
  list-style-type: none;
  padding: 0 5px;
`

export const TopNavItem: React.FC<TopNavItemProps> = ({
  href,
  title,
  children,
}) => {
  return (
    <TopNavItemStyle>
      <a href={href}>
        <Text variant="span">{title}</Text>
      </a>
    </TopNavItemStyle>
  )
}
