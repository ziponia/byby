import React from "react"
import { NextComponentType } from "next"
import {
  AppContextType,
  AppInitialProps,
} from "next/dist/next-server/lib/utils"
import { AppProps } from "next/dist/next-server/lib/router/router"
import { ApolloProvider, NormalizedCacheObject } from "@apollo/client"
import { ThemeProvider as StyledProvider } from "styled-components"
import { initializeApolllo, useApollo } from "../apollo-client"
import * as queries from "../graphql/query.graphql"
import theme from "../assets/styles"
import { appWithTranslation, includeDefaultNamespaces } from "../i18n"

import "../assets/index.scss"

const _App: NextComponentType<AppContextType, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: any) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <StyledProvider theme={theme}>
          <Component {...pageProps} />
        </StyledProvider>
      </ApolloProvider>
    </>
  )
}

_App.getInitialProps = async ({
  Component,
  ctx,
}: AppContextType): Promise<AppInitialProps> => {
  let pageProps: any = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  // i18n
  if (!pageProps.namespacesRequired) {
    pageProps.namespacesRequired = includeDefaultNamespaces()
  }

  // SSR
  if (typeof window === "undefined") {
    const apollo = initializeApolllo()

    await apollo.query({
      query: queries.INITIAL_QUERY,
    })

    pageProps.initialApolloState = apollo.cache.extract() as NormalizedCacheObject
  }

  return { pageProps }
}

export default appWithTranslation(_App)
