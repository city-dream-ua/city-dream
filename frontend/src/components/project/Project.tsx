import { ChangeEventHandler, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Box, Button, Container, Grid, useMediaQuery } from '@mui/material';

import { theme } from '@/themes';
import { TrelloAPI } from '@/api-utils';
import { EAlertStatus } from '@/types';
import { useAlertContext, useProjectsProvider } from '@/context';
import { DreamSupportModal, ProjectsList, SignInModal } from '@/components';

import { Description, DreamSteps, Gallery } from '.';

export const Project = () => {
  const { pathname } = useRouter();
  const { projects, project } = useProjectsProvider();
  const { addAlert } = useAlertContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contribution, setContribution] = useState<string>('');
  const sessionData = useSession();

  const isLessLg = useMediaQuery(theme.breakpoints.down('lg'));

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setContribution('');
  };

  const handleSubmit: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    // @ts-ignore
    const token = sessionData.data?.token;

    if (token) {
      TrelloAPI.updateDream(token, project.id, { contribution })
        .then(async (res) => {
          if (res.ok) {
            handleCloseModal();
            addAlert({
              status: EAlertStatus.SUCCESS,
              message: 'Success',
            });
          } else {
            addAlert({
              status: EAlertStatus.ERROR,
              message: res.statusText || 'Something went wrong',
            });
          }
        });
    }
  };

  const onCheck = (title: string) => {
    setIsModalOpen(true);
    setContribution(title);
  };

  return (
    <Box bgcolor={'background.paper'} pt={'52px'} pb={'68px'}>
      <Container>
        <Box mb={'50px'}>
          <Grid container columnSpacing={isLessLg ? 4 : '96px'} rowSpacing={4}>
            <Grid xs={12} md={7} item>
              <Gallery lessLg={isLessLg}/>
            </Grid>
            <Grid item xs={12} md={5}>
              <Description/>
              <Box mt={'58px'}>
                <Button
                  variant={'contained'}
                  size={'large'}
                  onClick={() => setIsModalOpen(true)}
                >
                  Підтримати мрію
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          {!!project.steps.length &&
            <DreamSteps onChange={onCheck} steps={project.steps}/>}
        </Box>

        {projects && (
          <Box component={'section'} mt={'84px'}>
            <ProjectsList projects={
              projects.filter(({ id }) => id !== project.id).slice(0, 4)
            }/>
          </Box>
        )}
      </Container>

      {sessionData?.data?.user ? (
        <DreamSupportModal
          open={isModalOpen}
          onClose={handleCloseModal}
          onChange={setContribution}
          onSubmit={handleSubmit}
          contribution={contribution}
        />
      ) : (
        <SignInModal
          open={isModalOpen}
          callbackUrl={pathname.replace('[slug]', project.slug)}
          onClose={handleCloseModal}
        />
      )}
    </Box>
  );
};
