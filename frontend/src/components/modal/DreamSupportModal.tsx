import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';

import {
  ModalProps,
  TextField,
  Typography,
  Button,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';

import { Modal } from '@/components';
import { theme } from '@/themes';

type DreamSupportModalProps = Omit<ModalProps, 'children' | 'onSubmit' | 'onChange'> & {
  onChange: (value: string) => void;
  onSubmit: (value: any) => void;
  contribution: string;
}

export const DreamSupportModal: FC<DreamSupportModalProps> = ({
  onSubmit,
  onChange,
  contribution,
  ...restProps
}) => {
  const moreSm = useMediaQuery(theme.breakpoints.up('sm'));

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    onChange(value);
  };


  return (
    <Modal {...restProps}>
      <Box minWidth={moreSm ? 360 : 240}>
        <Typography variant={'h3'} mb={3}>Заповніть поле</Typography>
        <Box component={'form'} onSubmit={onSubmit}>
          <Box mb={4}/>
          <TextField
            onChange={handleChange}
            value={contribution}
            fullWidth
            multiline
            rows={4}
            label={'Напишіть чим ви можете допомогти'}
            variant={'outlined'}
            name={'resources'}
            required
          />
          <Box mt={4}>
            <Button type={'submit'} variant={'contained'}>
              Відправити
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
