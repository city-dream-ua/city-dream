import Image from 'next/image';
import { Box } from '@mui/system';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';

import heroImage from '@/assets/images/cd-hero-image.png';
import { ButtonShareDream } from '..';
import { theme } from '@/themes';



export const Hero = () => {
  const lessLg = useMediaQuery(theme.breakpoints.down('lg'));
  const moreMd = useMediaQuery(theme.breakpoints.up('md'));
  const lessMd = useMediaQuery(theme.breakpoints.down('md'))

  const descriptionMaxWidth = moreMd ? 440 : 'initial';
  const squareWidth = lessLg ? 24 : 32;
  const squareHeight = squareWidth * 1.5;

  return (
    <Box bgcolor={'background.paper'} component={'section'}>
      <Container>
        <Box pt={lessMd ? '52px' : '90px'} pb={'64px'}>
          <Grid container columnSpacing={4} >
            <Grid item md={6}>
              <Box maxWidth={descriptionMaxWidth} mb={moreMd ? 0 : 8}>
                <Box mb={3}>
                  <Typography variant={'h1'} component={'h1'}>
                    City Dream - це толока <br/> для втілення мрій громади
                  </Typography>
                </Box>
                <Box mb={4}>
                  <Typography variant={'body1'}>
                    Ми створили цю платформу для ефективної комунікації між
                    бізнесом,
                    місцевою владою та жителями громади.
                  </Typography>
                </Box>
                <Box>
                  <ButtonShareDream size={'large'}/>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box position={'relative'}>
                {moreMd && (
                  <>
                    {/* Orange boxes */}
                    <Box
                      bgcolor={'primary.main'}
                      width={squareWidth}
                      height={squareWidth}
                      position={'absolute'}
                      top={-squareHeight}
                      left={-squareHeight}
                    />
                    <Box
                      bgcolor={'primary.main'}
                      width={squareHeight}
                      height={squareWidth}
                      position={'absolute'}
                      top={-squareWidth}
                      left={0}
                    />
                    <Box
                      bgcolor={'primary.main'}
                      width={squareWidth}
                      height={squareHeight}
                      position={'absolute'}
                      top={0}
                      left={-squareWidth}
                    />
                    {/* END Orange boxes */}
                  </>
                )}
                <Image
                  src={heroImage}
                  style={{ width: '100%', height: 'auto' }}
                  title={'Разом до втілення ідей'}
                  alt={'Команда складає руки перед девізом'}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
