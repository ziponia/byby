import { NextPage } from "next";
import React from "react";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";

type Props = {};

const IndexPage: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>hello</h1>
      <Query<any>
        query={gql`
          query {
            _version
          }
        `}
        ssr={typeof window === "undefined"}
      >
        {({ loading, data, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!</p>;
          return <p>{JSON.stringify(data)}</p>;
        }}
      </Query>
    </div>
  );
};

export default IndexPage;
