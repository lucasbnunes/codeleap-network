import { Post } from '@/types/post';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface PostsQueryResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsQueryResult, string>({
      query: () => '/careers/',
    }),
    createPost: builder.mutation<
      Post,
      Pick<Post, 'username' | 'title' | 'content'>
    >({
      query: () => '/careers/',
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery } = apiSlice;
