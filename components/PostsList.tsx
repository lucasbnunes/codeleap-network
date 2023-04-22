import { useGetPostsQuery } from "@/redux/slices/apiSlice";
import { Box, Skeleton } from "@mantine/core";
import { Post } from "./Post";

export function PostsList() {
  const { data, isLoading } = useGetPostsQuery('')
  return (
    <Box py="xl" sx={{ '& > article + article': { marginTop: 24 } }}>
      {isLoading && <Skeleton />}
      {data && data.results.map((post) => <Post key={post.id} post={post} />)}
    </Box>
  )
}