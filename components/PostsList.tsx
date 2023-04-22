import { useGetPostsQuery } from "@/redux/slices/apiSlice";
import { Box, Loader, Text } from "@mantine/core";
import { Post } from "./Post";

export function PostsList() {
  const { data, isLoading } = useGetPostsQuery('');

  return (
    <Box py="xl" sx={{ '& > article + article': { marginTop: 24 } }}>
      {isLoading && <Loader display="block" my="xl" mx="auto" />}
      {data?.results.map((post) => <Post key={post.id} post={post} />)}
      {data?.results.length === 0 &&
        <Box my="xl">
          <Text ta="center" color="customGray.3">No posts yet. Why not be the first to share something today?</Text>
        </Box>
      }
    </Box>
  )
} 