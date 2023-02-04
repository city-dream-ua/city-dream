import { FC } from 'react';
import { Button, ModalProps, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { signIn } from 'next-auth/react';
import { Modal } from '@/components/modal';

export const SignInModal: FC<Omit<ModalProps, 'children'> & { callbackUrl?: string }> = ({
  callbackUrl = '/',
  ...restProps
}) => {

  return (
    <Modal {...restProps}>
      <Box>
        <Typography variant={'h4'} mb={3}>
          Для того, щоб підтримати мрію, потрібно авторизуватися
        </Typography>
        <Button
          variant={'contained'}
          onClick={() => signIn('facebook', { callbackUrl })}
          sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
        >
          Login with Facebook
        </Button>
      </Box>
    </Modal>
  )
}
