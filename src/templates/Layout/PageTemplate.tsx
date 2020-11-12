import React from "react"

export type PageTemplateProps = {}

export const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  )
}
