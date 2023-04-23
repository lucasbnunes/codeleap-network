import { forwardRef, useState } from 'react'
import { Post as PostType } from '@/types/post';
import { Icon } from '@iconify/react';
import { Box, Flex, Title, ActionIcon, Text, Button, BoxProps } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAppSelector } from '@/hooks/useAppSelector';
import { PostActions } from './PostActions';

interface PostProps {
  post: PostType;
}
type Ref = HTMLElement;

const CONTENT_MAX_LENGTH = 260;

export const Post = forwardRef<Ref, PostProps>(function Post({ post }, ref) {
  const { username: currentUserUsername } = useAppSelector((state) => state.user)

  const [expanded, { toggle }] = useDisclosure(false);
  const isShort = post.content.length < CONTENT_MAX_LENGTH
  const content = isShort ? post.content : expanded ? post.content : `${post.content.slice(0, CONTENT_MAX_LENGTH)}...`

  const isAuthor = post.username === currentUserUsername

  const date = new Date(post.created_datetime)
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  return (
    <Box
      component='article'
      sx={(theme) => ({
        borderRadius: theme.radius.lg
      })}
      ref={ref}
    >
      <Flex bg='brand' c='white' p='xl' justify='space-between' sx={{ borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
        <Title order={3}>{post.title}</Title>
        {isAuthor && <PostActions post={post} />
        }

      </Flex>

      <Box
        sx={(theme) => ({
          border: `1px solid ${theme.colors.customGray[2]}`,
          borderTop: 'none',
          borderBottomLeftRadius: 'inherit',
          borderBottomRightRadius: 'inherit',
          padding: theme.spacing.xl,

          [`@media (max-width: ${theme.breakpoints.sm})`]: {
            padding: `${theme.spacing.xl} ${theme.spacing.md}`,
          }
        })}
      >

        <Flex justify='space-between' mb='md'>
          <Title order={4} color='customGray.3' size={18}>@{post.username}</Title>
          <Text color='customGray.3' size={18}>{formattedDate}</Text>
        </Flex>

        <Box mih={85}>
          <Text size={18}>{content}</Text>

          {!isShort && <Button size='xs' variant='subtle' display="block" mt="sm" ml="auto" fz={14} onClick={toggle}>{expanded ? 'See less' : 'See more'}</Button>}
        </Box>
      </Box>
    </Box>
  )
})