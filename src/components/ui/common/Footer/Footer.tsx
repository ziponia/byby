import React from "react"
import { Container } from "../Container"
import { FooterStyle, FooterNav, FooterInfo } from "./Footer.styled"

export const Footer: React.FC<{}> = () => {
  return (
    <FooterStyle>
      <FooterNav>
        <Container>
          <ul>
            <li>
              <a href="">회사소개</a>
            </li>
            <li>
              <a href="">공지사항</a>
            </li>
            <li>
              <a href="">입점문의</a>
            </li>
            <li>
              <a href="">개인정보처리방침</a>
            </li>
            <li>
              <a href="">이메일무단수집거부</a>
            </li>
          </ul>
        </Container>
      </FooterNav>
      <Container>
        <FooterInfo>
          <div style={{ flex: 1 }}>
            <p>비비(주) | 대표이사: 커비</p>
            <p>서울특별시 중랑구 성내동 항암2로 성내길3로 310</p>
            <p>사업자 등록번호: 111-99-00000</p>
            <p>통신판매업신고: 2018-인천남동-999</p>
            <a href="" target="_blank">
              사업자정보 확인
            </a>
          </div>

          <div style={{ flex: 1 }}>
            <p>고객센터</p>
            <p className="cs_number">1555-0000</p>
            <p>email: support@byby.com</p>
          </div>
          <div style={{ flex: 1 }}>
            <p>고객센터</p>
            <p>email: support@byby.com</p>
          </div>
        </FooterInfo>
      </Container>
    </FooterStyle>
  )
}
