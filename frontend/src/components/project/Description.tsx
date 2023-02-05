import { Avatar, Box, Stack, Typography } from '@mui/material';

import { useProjectsProvider } from '@/context';
import { useHTML } from '@/hooks';

import { StepProgress } from '.';
import { Image } from '..';

export const Description = () => {
  const {
    project: {
      title,
      description: descriptionProps,
      authorAvatar,
      authorLastName,
      authorFirstName,
      steps,
    },
  } = useProjectsProvider();
  const description = useHTML(descriptionProps);

  return (
    <Box>
      <Typography component={'h1'} variant={'h3'}>
        {title}
      </Typography>
      <Box display={'flex'} alignItems={'center'} my={3}>
        <Box mr={2}>
          <Avatar>
            {authorAvatar
              ? (
                <Image
                  src={authorAvatar}
                  width={40}
                  height={40}
                  alt={'User avatar icon'}
                />
              )
              : authorFirstName[0] + authorLastName[0]}
          </Avatar>
        </Box>
        <Typography variant={'caption'} color={'text.subInfo'}>
          {authorFirstName} {authorLastName}
        </Typography>
      </Box>
      <Box my={3} overflow={'hidden'}>

        <Typography
          color={'text.secondary'}
          fontWeight={'fontWeightLight'}
          dangerouslySetInnerHTML={{
            __html: description
          }}
        />
      </Box>
      {!!steps.length && (
        <Stack spacing={2}>
          {steps.map(({ name, resources }, index) => (
            <StepProgress key={index} step={name} progress={
              (resources.filter(resource => {
                return resource.status !== 'incomplete';
              }).length / resources.length) * 100
            }/>
          ))}
        </Stack>
      )}
    </Box>
  );
};
