import { Modal, ModalProps, useMantineTheme } from "@mantine/core";


export function BaseModal({ children, ...props }: ModalProps) {
  const theme = useMantineTheme()
  return (
    <Modal
      padding='xl'
      size={660}
      centered
      sx={{
        '& .mantine-Modal-title': {
          fontWeight: 700,
          fontSize: '1.375rem'
        }
      }}
      overlayProps={{
        color: theme.colors.customGray[3],
        opacity: 0.8
      }}
      {...props}
    >
      {children}
    </Modal>
  )
}