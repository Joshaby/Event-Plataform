import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qgl69k3sr601xs1j5f8d00/master',
    cache: new InMemoryCache()
});