import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

interface ApolloProviderProps {
  children: ReactNode;
}

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

export const ApolloWrapper = ({ children }: ApolloProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
