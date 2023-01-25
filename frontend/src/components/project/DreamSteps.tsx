import { Box } from '@mui/system';
import { Grid, Stack, Typography } from '@mui/material';
import { Checkbox } from '@/components';
import { FC } from 'react';
import { StepProps } from '@/types/projectCard';



export const DreamSteps: FC<{ steps: StepProps[] }> = ({ steps }) => {

  return (
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
            <DreamStep {...step}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const DreamStep: FC<StepProps> = ({ name, resources }) => (
  <Box>
    <Typography variant={'h4'} component={'h4'}>{name}</Typography>
    <Stack spacing={2} mt={2}>
      {resources.map(({ status, title }, index) => (
        <Box key={index}>
          <Checkbox
            labelProps={{ label: title }}
            checkboxProps={{ checked: status !== 'incomplete' , color: 'primary' }}
          />
        </Box>
      ))}
    </Stack>
  </Box>
);
