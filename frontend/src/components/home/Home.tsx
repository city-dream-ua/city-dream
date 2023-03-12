import { FC } from 'react';

import { Box, Container, Typography } from '@mui/material';

import { ProjectCardProps } from '@/types';
import { DreamFlow, Hero, ProjectsList } from '@/components';

type HomeProps = {
  projects: ProjectCardProps[];
}

export const Home: FC<HomeProps> = ({ projects }) => {
  return (
    <>
      <Hero/>
      <DreamFlow/>
      {projects && (
        <Box
          id="projects-in-progress"
          bgcolor={'background.paper'}
          component={'section'}
        >
          <Container>
            <Box pt={'52px'} pb={'102px'}>
              <Box mb={4} textAlign={'center'}>
                <Typography component={'h2'} variant={'h2'}>
                  Проекти, які чекають на втілення
                </Typography>
              </Box>
              <ProjectsList projects={projects}/>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};
