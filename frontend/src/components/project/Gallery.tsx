import { Box, Grid, Stack } from '@mui/material';
import { StaticImageData } from 'next/image';
import projectImageMock from '@/mocks/images/project-image-mock.png';
import { FC } from 'react';
import { useProjectsProvider } from '@/context';

import { Image } from '../atom';

type ImageContainerProps = {
  src?: StaticImageData
  alt?: string;
}

const ImageContainer: FC<ImageContainerProps> = (
  {
    src = projectImageMock,
    alt = 'Project image'
  }
) => (
  <Box width={'100%'} height={105} sx={{
    '& > span': {
      height: '100% !important'
    }
  }}
  >
    <Image
      style={{ objectFit: 'cover' }}
      src={src}
      alt={alt}
    />
  </Box>
);

export const Gallery: FC<{ lessLg: boolean }> = ({ lessLg }) => {
  const { project: { src }} = useProjectsProvider();

  return (
    // TODO: config side gallery
    // <Grid
    //   container
    //   height={'100%'}
    //   maxHeight={'468px'}
    //   spacing={lessLg ? 2 : 4}
    // >
    //   <Grid item xs={3}>
    //     <Stack spacing={2}>
    //       <ImageContainer/>
    //       <ImageContainer/>
    //       <ImageContainer/>
    //       <ImageContainer/>
    //     </Stack>
    //   </Grid>
    //   <Grid item xs={9}>
    <Box position={'relative'} width={'100%'} height={500}>
      <Image
        fill
        priority
        sizes={'100%'}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        src={src}
        alt={'Project image'}
      />
    </Box>
    //   </Grid>
    // </Grid>
  )
};
