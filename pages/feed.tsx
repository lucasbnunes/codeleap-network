import { Box, Button, Container, Flex, Title } from '@mantine/core'
import { NewPostForm } from '@/components/NewPostForm';
import { PostsList } from '@/components/PostsList';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAuth } from '@/hooks/useAuth';

export default function Feed() {
  const { username } = useAppSelector((state) => state.user)
  const { signOut } = useAuth()

  if (!username) {
    return null
  }

  return (
    <Container maw={800} mih='100vh' bg='white' px={0}>
      <Flex bg='brand' py={27} px={37} justify="space-between">
        <Title size={22} color='white' weight={700}>CodeLeap Network</Title>

        <Button onClick={signOut}>Sign out</Button>
      </Flex>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,

          [`@media (max-width: ${theme.breakpoints.sm})`]: {
            padding: `${theme.spacing.xl} ${theme.spacing.md}`,
          }
        })}
      >
        <NewPostForm />
        <PostsList />
      </Box>
    </Container>
  )
}

Feed.isPublic = false;