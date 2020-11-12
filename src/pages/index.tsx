import React from "react"
import { KubyNextPageProps } from "../interface/core"
import { IndexTemplate } from "../templates/IndexTemplate"

export type Props = {}

const IndexPage: KubyNextPageProps<Props> = (props) => {
  return <IndexTemplate />
}

export default IndexPage
