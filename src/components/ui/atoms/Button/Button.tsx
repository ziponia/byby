import React from "react"

export type ButtonProps = {}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button>{props.children}</button>
}
