/**
 * 단순히, 반응형 엘리먼트를 만들기 위한 컴포넌트
 */
import React, { useMemo } from "react"
import { Image, ImageProps } from "../atoms/Image"

type Props = ImageProps & {
  // 비율 예) 1/1, 2/1, 5:5, 4:3, 16:9
  ratio?: number
}

export const ResponseImage: React.FC<Props> = (props) => {
  const _ratio = useMemo(() => props.ratio * 100, [props.ratio])

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          paddingTop: `${_ratio}%`,
          overflow: "hidden",
        }}
      >
        <Image
          src={props.src}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
          }}
          {...props}
        />
      </div>
    </div>
  )
}

ResponseImage.defaultProps = {
  ratio: 1 / 1,
}
