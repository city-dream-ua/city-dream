import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Box } from '@mui/system';
import { Avatar, Button, Typography } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

import { ButtonShareDream, ButtonSyncWithTrello } from '@/components/atom';

interface User {
  email: string;
  image: string;
  name: string;
}

export const NavMenu = () => {
  const sessionData = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (sessionData?.data) {
      setUser(sessionData.data?.user as User);

    } else {
      setUser(null);
    }
  }, [sessionData]);

  return (
    <>
      <Box display={'flex'} alignItems={'center'} flexGrow={1}>
        <Box>
          <Link href={'/about-us'}>
            <Typography
              color={'text.light'}
              sx={{ textDecoration: 'none' }}
            >
              Про нас
            </Typography>
          </Link>
        </Box>
        <Box marginX={3}>
          <Link href={'/#projects-in-progress'} passHref>
            <Typography
              color={'text.light'}
              sx={{ textDecoration: 'none' }}
            >
              Проєкти
            </Typography>
          </Link>
        </Box>
        <ButtonShareDream/>
      </Box>
      <Box>
        {sessionData?.data ? (
          <Box display={'flex'} alignItems={'center'}>
            <Box mr={2}>
              <ButtonSyncWithTrello/>
            </Box>
            <Box mr={2}>
              <Button
                variant={'outlined'}
                color={'inherit'}
                onClick={() => signOut()}
                sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
              >
                Logout
              </Button>
            </Box>
            <Avatar title={user?.name}>
              {user?.image
                ? (
                  <Image
                    src={user?.image}
                    width={40}
                    height={40}
                    alt={'User avatar icon'}
                  />
                )
                : user?.name?.split((' ')).map(str => str[0].toUpperCase())}
            </Avatar>
          </Box>
        ) : (
          <Button
            variant={'outlined'}
            color={'inherit'}
            onClick={() => signIn('facebook', { callbackUrl: '/' })}
            sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
          >
            Login with Facebook
          </Button>
        )}
      </Box>
    </>
  );
};
