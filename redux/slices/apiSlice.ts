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
    getPosts: builder.query<
      PostsQueryResult,
      { limit: number; offset: number }
    >({
      query: ({ limit, offset }) => `/careers/?limit=${limit}&offset=${offset}`,
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
    updatePost: builder.mutation<Post, Pick<Post, 'id' | 'title' | 'content'>>({
      query: (post) => ({
        url: `/careers/${post.id}/`,
        method: 'PATCH',
        body: { title: post.title, content: post.content },
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: builder.mutation<Post, Pick<Post, 'id'>>({
      query: (post) => ({
        url: `/careers/${post.id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = apiSlice;
