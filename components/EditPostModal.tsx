import { TextInput, Textarea, Flex, Button, ModalProps } from "@mantine/core";
import { BaseModal } from "./BaseModal";
import { useForm } from "react-hook-form";
import { useUpdatePostMutation } from "@/redux/slices/apiSlice";
import { Post } from "@/types/post";

interface EditPostModalProps extends ModalProps {
  post: Post;
}

interface Inputs {
  title: string;
  content: string;
}

export function EditPostModal({ post, onClose, ...props }: EditPostModalProps) {
  const { handleSubmit, register, watch, reset } = useForm<Inputs>({
    defaultValues: {
      title: post.title,
      content: post.content
    }
  })
  const [updatePost, { isLoading }] = useUpdatePostMutation()

  function onSubmit(data: Inputs) {
    updatePost({ ...data, id: post.id }).unwrap().then(() => onClose())
  }

  return (
    <BaseModal title="Edit item" onClose={onClose} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput mb='xl' placeholder='Hello world' label='Title' {...register('title', { required: true })} />
        <Textarea placeholder='Content here' label='Content' {...register('content', { required: true })} />

        <Flex mt="xl" justify="flex-end" align="center" gap="xl">
          <Button
            display="block"
            variant="outline"
            color="dark"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            display="block"
            type="submit"
            disabled={!watch('content') || !watch('title')}
            loading={isLoading}
            color='success'
          >
            Save
          </Button>
        </Flex>
      </form>

    </BaseModal>
  )
}