import styled from "styled-components"

export const FooterStyle = styled.footer`
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  color: #333333;
  a {
    color: #333333;
    text-decoration: underline;
  }
`

export const FooterNav = styled.nav`
  width: 100%;
  color: #333333;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;

    li {
      list-style-type: none;
      padding: 0 20px;
      &:first-of-type {
        padding-left: 0;
      }

      a {
        font-size: 1.2rem;
      }
    }
  }
`

export const FooterInfo = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 500;
  padding: 20px 0 40px 0;

  .cs_number {
    font-size: 2rem;
    font-weight: bold;
  }
`
