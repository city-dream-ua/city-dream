import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';

import {
  ModalProps,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';

import { Modal } from '@/components';

type DreamSupportModalProps = Omit<ModalProps, 'children' | 'onSubmit'> & {
  dreamId: string;
  onSubmit: (value: any) => void;
}

const defaultFormState = { resources: '', email: '', phoneNumber: '' };

export const DreamSupportModal: FC<DreamSupportModalProps> = ({
  onSubmit,
  dreamId,
  ...restProps
}) => {
  const [values, setValues] = useState<{ [name: string]: string | null }>({
    ...defaultFormState,
    dreamId,
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: {
      name,
      value,
    },
  }) => {

    setValues(prev => ({
      ...prev,
      [name]: name === 'phoneNumber' ? value.replace(/\D/ig, '') : value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Modal {...restProps}>
      <Box>
        <Typography variant={'h3'} mb={3}>Заповніть поле</Typography>
        <Typography mb={3}>Напишіть, будь ласка, які саме ресурси ви можете
          допомогти зібрати:</Typography>
        <Box component={'form'} onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={values.email}
            fullWidth
            type={'email'}
            label={'Email'}
            variant={'outlined'}
            name={'email'}
            required
          />
          <Box mb={4}/>
          <TextField
            onChange={handleChange}
            value={values.phoneNumber}
            fullWidth
            type={'phone'}
            label={'Phone number'}
            variant={'outlined'}
            name={'phoneNumber'}
          />
          <Box mb={4}/>
          <TextField
            onChange={handleChange}
            value={values.resources}
            fullWidth
            multiline
            rows={4}
            label={'Ресурси'}
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
