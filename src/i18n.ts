import ICU, { IcuInstance } from "i18next-icu"
import ko from "i18next-icu/locale-data/ko"
import en from "i18next-icu/locale-data/en"
import i18n from "next-i18next"
import { useTranslation } from "react-i18next"
import path from "path"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()
const { localeSubpaths } = publicRuntimeConfig

const use: IcuInstance[] = []

const icu = new ICU({})

icu.addLocaleData(ko)
icu.addLocaleData(en)
use.push(icu)

const Nexti18nInstance = new i18n({
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  defaultLanguage: "ko",
  defaultNS: "common",
  localePath: path.resolve("./public/static/locales"),
  fallbackNS: "en",
  otherLanguages: ["ko"],
  localeExtension: "json",
  localeSubpaths,
  use,
})

const { appWithTranslation, withTranslation } = Nexti18nInstance

const includeDefaultNamespaces = (namespaces: string[] = []) =>
  ["common"].concat(namespaces)

export {
  useTranslation,
  appWithTranslation,
  withTranslation,
  includeDefaultNamespaces,
}

export default Nexti18nInstance
