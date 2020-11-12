import React from "react"
import styled from "styled-components"
import { IoIosMenu } from "@/components/Icon"

export const GnbStyle = styled.section`
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;

  nav {
    ul {
      display: flex;
      justify-content: center;

      li {
        display: flex;
        align-items: center;
        list-style-type: none;
        font-size: 1.2rem;
        height: 50px;
        padding: 0 20px;
      }
    }
  }
`

export type GnbProps = {}

export const Gnb: React.FC<GnbProps> = (props) => {
  return (
    <GnbStyle>
      <nav>
        <ul>
          <li>
            <IoIosMenu style={{ fontSize: "1.8rem", marginRight: 10 }} />
            전체메뉴
          </li>
          <li>
            <a href="">GNB1</a>
          </li>
          <li>
            <a href="">GNB1</a>
          </li>
          <li>
            <a href="">GNB1</a>
          </li>
          <li>
            <a href="">GNB1</a>
          </li>
          <li>
            <a href="">GNB1</a>
          </li>
          <li>
            <a href="">GNB1</a>
          </li>
        </ul>
      </nav>
    </GnbStyle>
  )
}
