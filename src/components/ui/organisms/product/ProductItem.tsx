import React from "react"
import styled from "styled-components"
import { ResponseImage } from "@/components/ui/molecules/ResponseImage"

export const ProductItemStyle = styled.figure`
  position: relative;
  width: 100%; // 추후에 제거 되어야함.
  border: 1px solid #eeeeee;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;

  .item-image {
    flex: 1;
    object-fit: contain;
    width: 100%;
  }
  figcaption {
    padding: 10px;

    .mallName {
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .sale-cost {
      position: relative;
      display: inline;
      text-decoration: line-through;
    }
    .item-title {
      font-size: 1.3rem;
      font-weight: 300;
      margin-bottom: 20px;
      height: 40px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .cost-guide {
      margin-bottom: 20px;
      .sale-cost {
      }
      .origin-cost {
      }
    }

    .extra-info {
      font-size: 1.2rem;
      display: flex;
      align-items: center;

      p:first-of-type {
        margin-right: 10px;
      }
    }
  }
`

export type ProductItemProps = {}

export const ProductItem: React.FC<ProductItemProps> = (props) => {
  return (
    <ProductItemStyle>
      <ResponseImage
        ratio={1 / 1}
        className="item-image"
        src="http://th4.tmon.kr/thumbs/image/e25/af1/503/eb8152b77_700x700_95_FIT.jpg"
      />
      <figcaption>
        <p className="mallName">비비샵</p>
        <p className="item-title">
          엑셀 배우기 교육 기초 실무 USB 책 교재 보다 좋은 강좌
        </p>

        <div className="cost-guide">
          <p className="sale-cost">6000원</p>
          <p className="origin-cost">3000원</p>
        </div>

        <div className="extra-info">
          <p>리뷰 42개</p>
          <p>평점 5.4</p>
        </div>
      </figcaption>
    </ProductItemStyle>
  )
}

ProductItem.defaultProps = {}
