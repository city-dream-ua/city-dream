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
import { LinkText } from '@/components/atom/link';

export const CardMember: FC<CardMemberProps> = ({
  name,
  img,
  position,
  workPlace,
  workLink,
  fbLink,
}) => (
  <Card
    sx={{ maxWidth: 300, m: '0 auto', position: 'relative', height: '100%' }}
    elevation={0}
  >
    <Link style={{ position: 'absolute', height: '100%', width: '100%', zIndex: 1 }} href={fbLink} target={'_blank'}/>
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
      <Typography variant="body2" mb={1}>
        Посада: {position}
      </Typography>
      <Typography variant="body2">
        Місце роботи: {(
        <LinkText
          href={workLink}
          target={'_blank'}
          sx={{ position: 'relative', zIndex: 2 }}
        >
          {workPlace}
        </LinkText>
      )}
      </Typography>
    </CardContent>
  </Card>
);
