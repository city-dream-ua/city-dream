import { FC, useState } from 'react';
import Link from 'next/link';

import { Image } from '../atom';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { ProjectCardProps } from '@/types/projectCard';
import { useHTML } from '@/hooks';

export const ProjectCard: FC<ProjectCardProps> = (
  {
    slug,
    src,
    alt,
    title,
    authorLastName,
    authorFirstName,
    description: descriptionProps,
  },
) => {
  const [elevation, setElevation] = useState(1);
  const description = useHTML(descriptionProps);

  const onMouseOver = () => {
    setElevation(5);
  };

  const onMouseLeave = () => {
    setElevation(1);
  };

  return (
    <Link href={`/project/${slug}`}>
      <Card
        elevation={elevation}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        aria-labelledby={'project-card'}
        sx={{ cursor: 'pointer', height: '100%' }}
      >
        <CardMedia sx={{
          '& > span': {
            width: '101% !important',
            maxWidth: '101% !important',
          },
        }}
        >
          <Box sx={{ '& > img': { width: '100%' } }}>
            <Image
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              width={300}
              height={200}
              src={src}
              alt={alt}
            />
          </Box>
        </CardMedia>
        <CardContent>
          <Box>
            <Typography
              mb={1}
              component={'h3'}
              variant={'h4'}
              height={40}
              display={'-webkit-box'}
              overflow={'hidden'}
              sx={{
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '2 !important',
              }}
            >
              {title}
            </Typography>
            <Box mb={'10px'}>
              <Typography
                variant={'caption'}
                color={'text.subInfo'}
              >
                {authorFirstName} {authorLastName}
              </Typography>
            </Box>

            <Typography
              color={'text.secondary'}
              display={'-webkit-box'}
              overflow={'hidden'}
              sx={{
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '5 !important',
              }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};
