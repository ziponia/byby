import { NormalizedCacheObject } from "@apollo/client";
import { NextComponentType, NextPage } from "next";

export type KubyApolloProps = {
  initialApolloState?: NormalizedCacheObject;
};

export type I18nProps = {
  namespacesRequired?: string[];
};

export type CombineProps = KubyApolloProps & I18nProps;

export type KubyNextPageProps<T = {}> = NextComponentType<
  T,
  CombineProps,
  T & CombineProps
>;
