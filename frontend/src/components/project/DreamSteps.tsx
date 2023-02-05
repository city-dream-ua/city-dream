import { Box } from '@mui/system';
import { Grid, Stack, Typography } from '@mui/material';
import { Checkbox } from '@/components';
import { ChangeEvent, FC } from 'react';
import { StepProps } from '@/types/projectCard';

export const DreamSteps: FC<{ steps: StepProps[]; onChange: (title: string) => void; }> = ({
  steps,
  onChange,
}) => (
  <Box>
    <Stack direction={'row'} spacing={2} mb={3}>
      {/* TODO [API]: roll back switch button after contributors and comments */}
      <Typography variant={'h3'}>Етапи мрії</Typography>
      {/*<Button variant={'contained'}>*/}
      {/*  Етапи мрії*/}
      {/*</Button>*/}
      {/* TODO [API]: add contributors */}
      {/*<Button variant={'contained'} color={'info'}>*/}
      {/*  Учасники*/}
      {/*</Button>*/}
      {/* TODO [API]: add comments */}
      {/*<Button variant={'text'} color={'inherit'}>*/}
      {/*  Коментарі та пропозмції*/}
      {/*</Button>*/}
    </Stack>
    <Grid container columnSpacing={2} rowSpacing={5}>
      {steps.map((step, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <DreamStep onChange={onChange} {...step}/>
        </Grid>
      ))}
    </Grid>
  </Box>
);
const DreamStep: FC<StepProps & { onChange: (title: string) => void }> = ({
  name,
  resources,
  onChange,
}) => {

  const handleCheckbox = ({ target: { checked } }: ChangeEvent<HTMLInputElement>, title: string) => {
    if (checked) {
      onChange(title);
    }
  };

  return (
    <Box>
      <Typography variant={'h4'} component={'h4'}>{name}</Typography>
      <Stack spacing={2} mt={2}>
        {resources.map(({ status, title }, index) => (
          <Box key={index}>
            <Checkbox
              labelProps={{ label: title }}
              checkboxProps={{
                checked: status !== 'incomplete',
                color: 'primary',
                onChange: (e) => handleCheckbox(e, title),
              }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
