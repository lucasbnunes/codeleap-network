import { Button, Flex, ModalProps } from "@mantine/core";
import { BaseModal } from "./BaseModal"
import { useDeletePostMutation } from "@/redux/slices/apiSlice";

interface DeletePostModalProps extends ModalProps {
  postId: number;
}

export function DeletePostModal({ postId, onClose, ...props }: DeletePostModalProps) {
  const [deletePost, { isLoading }] = useDeletePostMutation()

  function handleConfirmDelete() {
    deletePost({ id: postId }).unwrap().then(() => onClose())
  }

  return (
    <BaseModal title="Are you sure you want to delete this item?" onClose={onClose} {...props}>
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
          loading={isLoading}
          color='error'
          onClick={handleConfirmDelete}
        >
          Delete
        </Button>
      </Flex>
    </BaseModal>
  )
}