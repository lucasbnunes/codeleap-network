import { Box, Container, Title } from '@mantine/core'
import { NewPostForm } from '@/components/NewPostForm';
import { PostsList } from '@/components/PostsList';

export default function Feed() {
  return (
    <Container maw={800} mih='100vh' bg='white' px={0}>
      <Box bg='brand' py={27} px={37}>
        <Title size={22} color='white' weight={700}>CodeLeap Network</Title>
      </Box>
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