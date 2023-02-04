import { FC } from 'react';
import { ModalProps, Modal as MUIModal, Paper } from '@mui/material';
import { Box } from '@mui/system';

export const Modal: FC<ModalProps> = ({ children, ...restProps }) => (
  <MUIModal {...restProps}>
    <Box
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      maxWidth={524}
      sx={{ transform: 'translate(-50%, -50%)' }}
    >
      <Paper>
        <Box p={4}>
          {children}
        </Box>
      </Paper>
    </Box>
  </MUIModal>
);
