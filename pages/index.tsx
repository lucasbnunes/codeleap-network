import { useAppDispatch } from "@/hooks/useAppDispatch"
import { setUsername } from '@/redux/slices/userSlice'
import { Button, Container, Flex, TextInput, Title } from '@mantine/core'
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

interface Inputs {
  username: string;
}

export default function Home() {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const router = useRouter()
  const dispatch = useAppDispatch()

  function onSubmit(data: Inputs): void {
    dispatch(setUsername(data.username))
    router.push("/feed")
  }

  return (
    <Flex mih="100vh" align="center">
      <Container bg='white' maw='500px' p="xl" sx={(theme) => ({ flex: 1, borderRadius: theme.radius['lg'] })}>

        <Title order={1} size={22}>
          Welcome to CodeLeap network!
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput label="Please enter your username" my="xl" placeholder="John Doe" {...register('username', { required: true })} />

          <Flex justify="flex-end">
            <Button type="submit" disabled={!watch('username')} ml='auto'>ENTER</Button>
          </Flex>
        </form>
      </Container>
    </Flex>
  )
}