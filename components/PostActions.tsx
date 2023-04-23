import { useUpdatePostMutation } from "@/redux/slices/apiSlice";
import { Post } from "@/types/post";
import { Icon } from "@iconify/react";
import { Flex, ActionIcon, Modal, Button, TextInput, Textarea, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";
import { EditPostModal } from "./EditPostModal";
import { DeletePostModal } from "./DeletePostModal";

interface PostActionsProps {
  post: Post;
}

export function PostActions({ post }: PostActionsProps) {
  const [isEditing, { toggle: toggleEdit }] = useDisclosure(false)
  const [isDeleting, { toggle: toggleDelete }] = useDisclosure(false)

  return (
    <Flex gap='xl'>
      <EditPostModal opened={isEditing} onClose={toggleEdit} post={post} />
      <DeletePostModal opened={isDeleting} onClose={toggleDelete} postId={post.id} />
      <ActionIcon variant='transparent' onClick={toggleDelete}><Icon icon='ic:baseline-delete-forever' color='white' fontSize='2rem' /></ActionIcon>
      <ActionIcon variant='transparent' onClick={toggleEdit}><Icon icon='bx:bx-edit' color='white' fontSize='2rem' /></ActionIcon>
    </Flex>
  )
}