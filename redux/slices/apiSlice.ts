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
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<PostsQueryResult, string>({
      query: () => '/careers/',
      providesTags: ['Posts'],
    }),
    createPost: builder.mutation<
      Post,
      Pick<Post, 'username' | 'title' | 'content'>
    >({
      query: (initialPost) => ({
        url: '/careers/',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = apiSlice;
