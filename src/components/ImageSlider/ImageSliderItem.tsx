import React from "react"

export type ImageSliderItemProps = {
  src?: string
  alt?: string
}

export const ImageSliderItem: React.FC<ImageSliderItemProps> = ({
  src,
  alt,
}) => {
  return (
    <div>
      <img
        src="https://via.placeholder.com/1024x600.png?text=Main%20Banner-1"
        alt="main banner1"
      />
    </div>
  )
}
