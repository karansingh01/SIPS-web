import { InMemoryCache, makeVar } from "@apollo/client";

export const offset = makeVar(26);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        offset: {
          read() {
            return offset();
          },
        },
      },
    },
  },
});
