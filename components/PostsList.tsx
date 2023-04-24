import { useGetPostsQuery } from "@/redux/slices/apiSlice";
import { Box, Flex, Loader, Pagination, Text } from "@mantine/core";
import { Post } from "./Post";
import { useEffect, useRef, useState } from "react";

const POSTS_PER_PAGE = 10

export function PostsList() {
  const [page, setPage] = useState<number>(0)
  const { data, isLoading } = useGetPostsQuery({ limit: POSTS_PER_PAGE, offset: page * POSTS_PER_PAGE })
  const totalPages = data?.count ? Math.ceil(data.count / POSTS_PER_PAGE) : 0

  return (
    <Box py="xl" sx={{ '& > article + article': { marginTop: 24 } }}>
      {data?.results.map((post, index) => <Post key={post.id} post={post} />)}
      {isLoading && <Loader display="block" my="xl" mx="auto" />}
      {data?.results.length === 0 &&
        <Box my="xl">
          <Text ta="center" color="customGray.3">No posts yet. Why not be the first to share something today?</Text>
        </Box>
      }

      {!isLoading && Boolean(data?.results?.length) &&
        <Flex mt="xl" justify="center" >
          <Pagination value={page + 1} onChange={(newPage) => setPage(newPage - 1)} total={totalPages} radius="md" />
        </Flex>
      }
    </Box>
  )
} 