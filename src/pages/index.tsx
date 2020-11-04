import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Query } from "@apollo/client/react/components";
import { gql, useApolloClient } from "@apollo/client";
import { initializeApolllo } from "../apollo-client";

type Props = {
  initialApolloState?: any;
};

const IndexPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>nextjs,apollo-server SSR Example</title>
        <meta name="title" content="nextjs,apollo-server SSR Example" />
        <meta name="description" content="nextjs,apollo-server SSR Example" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="nextjs,apollo-server SSR Example" />
        <meta
          property="og:description"
          content="nextjs,apollo-server SSR Example"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="nextjs,apollo-server SSR Example"
        />
        <meta
          property="twitter:description"
          content="nextjs,apollo-server SSR Example"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <div>
        <h1>apollo SSR Demo</h1>

        <hr />
        <p>
          이 부분은 서버사이드 랜더링을 합니다.
          <br />
          우클릭 후, 페이지 소스보기를 눌러 확인 해보세요.
        </p>
        <p>Loading 이 뜨지 않습니다!</p>
        <Query<any>
          query={gql`
            query {
              _version
            }
          `}
        >
          {({ loading, data, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error!</p>;
            return <p>{JSON.stringify(data)}</p>;
          }}
        </Query>
        <hr />
        <p>
          이 부분은 서버사이드 랜더링을 하지 않습니다.
          <br />
          우클릭 후, 페이지 소스보기를 눌러 확인 해보세요. 아마, Loading 이
          보일겁니다!
        </p>
        <p>Loading 이 데이터로 변경됩니다!</p>
        <Query<any>
          query={gql`
            query {
              _appName
            }
          `}
        >
          {({ loading, data, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error!</p>;
            return <p>{JSON.stringify(data)}</p>;
          }}
        </Query>
        <hr />
      </div>
    </>
  );
};

IndexPage.getInitialProps = async (ctx) => {
  const apollo = initializeApolllo();

  await apollo.query({
    query: gql`
      query {
        _version
      }
    `,
  });

  return {
    initialApolloState: apollo.cache.extract(),
  };
};

export default IndexPage;
