import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const articleApi = createApi({
  reducerPath: "artcileApi",
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `test`,
    }),
  }),
});
