import { useState } from 'react'
import { Post } from '@/types/post';
import { Icon } from '@iconify/react';
import { Box, Flex, Title, ActionIcon, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAppSelector } from '@/hooks/useAppSelector';

interface PostProps {
  post: Post;
}

const CONTENT_MAX_LENGTH = 260;

export function Post({ post }: PostProps) {
  const { username: currentUserUsername } = useAppSelector((state) => state.user)

  const [expanded, { toggle }] = useDisclosure(false);
  const isShort = post.content.length < CONTENT_MAX_LENGTH
  const content = isShort ? post.content : expanded ? post.content : `${post.content.slice(0, CONTENT_MAX_LENGTH)}...`

  const isAuthor = post.username === currentUserUsername

  const date = new Date(post.created_datetime)
  console.log(date)
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  return (
    <Box
      component='article'
      sx={(theme) => ({
        borderRadius: theme.radius.lg
      })}
    >
      <Flex bg='brand' c='white' p='xl' justify='space-between' sx={{ borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}>
        <Title order={3}>{post.title}</Title>
        {isAuthor && <Flex gap='xl'>
          <ActionIcon variant='transparent'><Icon icon='ic:baseline-delete-forever' color='white' fontSize='2rem' /></ActionIcon>
          <ActionIcon variant='transparent'><Icon icon='bx:bx-edit' color='white' fontSize='2rem' /></ActionIcon>
        </Flex>
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
}