import { useAppSelector } from "@/hooks/useAppSelector";
import { useCreatePostMutation } from "@/redux/slices/apiSlice";
import { Box, Button, TextInput, Textarea, Title } from "@mantine/core";
import { useForm } from "react-hook-form";

interface Inputs {
  title: string;
  content: string;
}

export function NewPostForm() {
  const { handleSubmit, register, watch, reset } = useForm<Inputs>()
  const [createNewPost, { isLoading }] = useCreatePostMutation()

  const { username } = useAppSelector((state) => state.user)

  function onSubmit(data: Inputs) {
    createNewPost({ ...data, username }).unwrap().then(() => reset())
  }

  return (
    <Box
      sx={(theme) => ({
        border: `1px solid ${theme.colors.customGray[2]}`,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.xl,

        [`@media (max-width: ${theme.breakpoints.sm})`]: {
          padding: `${theme.spacing.xl} ${theme.spacing.md}`,
        }
      })}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title order={2} size={22} weight={700}>What’s on your mind?</Title>

        <TextInput my='xl' placeholder='Hello world' label='Title' {...register('title', { required: true })} />
        <Textarea placeholder='Content here' label='Content' {...register('content', { required: true })} />

        <Button
          display="block"
          ml="auto"
          mt="xl"
          type="submit"
          disabled={!watch('content') || !watch('title')}
          loading={isLoading}
        >
          Create
        </Button>
      </form>
    </Box>
  )
}