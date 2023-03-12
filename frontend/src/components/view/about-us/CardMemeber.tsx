import { FC } from 'react';
import Link from 'next/link';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { Image } from '@/components';

import { CardMemberProps } from './interface';

export const CardMember: FC<CardMemberProps> = ({
  name,
  img,
  position,
  fbLink,
}) => (
  <Card sx={{ maxWidth: 300, m: '0 auto' }} elevation={0}>
    <Link style={{ color: 'inherit' }} href={fbLink} target={'_blank'}>
      <CardActionArea>
        <CardMedia>
          <Box width={'100%'} height={240} position={'relative'}>
            <Image
              alt={'Team member'}
              src={img}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </Box>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6">
            {name}
          </Typography>
          <Typography variant="body2">
            {position}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Link>
  </Card>
);
