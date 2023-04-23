import { useGetPostsQuery } from "@/redux/slices/apiSlice";
import { Box, Loader, Text } from "@mantine/core";
import { Post } from "./Post";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "@mantine/hooks";

export function PostsList() {
  const { ref, entry } = useIntersection({
    threshold: 1,
  });
  const [nextPage, setNextPage] = useState<string | null>()
  const { data, isLoading } = useGetPostsQuery(nextPage || '')

  useEffect(() => {
    if (entry?.isIntersecting && !isLoading) {
      const urlParams = data?.next?.slice(data.next.indexOf('?'))
      setNextPage((prev) => urlParams || prev)
    }
  }, [entry])

  return (
    <Box py="xl" sx={{ '& > article + article': { marginTop: 24 } }}>
      {data?.results.map((post, index) => <Post key={post.id} post={post} ref={index === data?.results.length - 1 ? ref : null} />)}
      {isLoading && <Loader display="block" my="xl" mx="auto" />}
      {data?.results.length === 0 &&
        <Box my="xl">
          <Text ta="center" color="customGray.3">No posts yet. Why not be the first to share something today?</Text>
        </Box>
      }
    </Box>
  )
} 