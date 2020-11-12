import React from "react"
import { useTranslation } from "../i18n"
import { KubyNextPageProps } from "../interface/core"

type Props = {}

const ExamplePage: KubyNextPageProps<Props> = (props) => {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div>{t("product")}</div>
      <div>{t("p")}</div>
      <div>{i18n.language}</div>
    </>
  )
}

ExamplePage.getInitialProps = async (ctx) => {
  return {}
}

export default ExamplePage
