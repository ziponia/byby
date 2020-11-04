import React from "react";
import { NextComponentType } from "next";
import {
  AppContextType,
  AppInitialProps,
} from "next/dist/next-server/lib/utils";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo-client";

const _App: NextComponentType<AppContextType, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: any) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

_App.getInitialProps = async ({
  Component,
  ctx,
}: AppContextType): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default _App;
