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

type DreamSupportModalProps = Omit<ModalProps, 'children' | 'onSubmit'> & {
  dreamId: string;
  onSubmit: (value: any) => void;
}

export const DreamSupportModal: FC<DreamSupportModalProps> = ({
  onSubmit,
  dreamId,
  ...restProps
}) => {
  const moreSm = useMediaQuery(theme.breakpoints.up('sm'));
  const [contribute, setContribute] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setContribute(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(contribute);
  };

  return (
    <Modal {...restProps}>
      <Box minWidth={moreSm ? 360 : 240}>
        <Typography variant={'h3'} mb={3}>Заповніть поле</Typography>
        <Box component={'form'} onSubmit={handleSubmit}>
          <Box mb={4}/>
          <TextField
            onChange={handleChange}
            value={contribute}
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
