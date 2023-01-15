import { Box } from '@mui/system';
import Link from 'next/link';
import { Button, Typography, Stack, Avatar } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export const DrawerMenu = () => {
  const { data: session } = useSession();

  return (
    <Box p={4} textAlign={'center'} height={'100%'}>
      <Stack spacing={4} height={'100%'}>
        <Link href={'/#pro-nas'}>
          <Typography
            color={'text.light'}
            sx={{ cursor: 'pointer' }}
          >
            Про нас
          </Typography>
        </Link>
        <Link href={'/#pro-nas'}>
          <Typography
            color={'text.light'}
            sx={{ cursor: 'pointer' }}
          >
            Проєкти
          </Typography>
        </Link>
        <Button
          variant={'contained'}
        >
          Поділитися мрією
        </Button>

        <Stack justifyContent={'flex-end'} flexGrow={1}>
          {session ? (
            <Box display={'flex'} alignItems={'center'}>
              <Box marginRight={2}>
                <Button
                  variant={'outlined'}
                  color={'inherit'}
                  onClick={() => signOut()}
                  sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
                >
                  Logout
                </Button>
              </Box>
              <Avatar title={session.user?.name as string}>
                {session.user?.image
                  ? (
                    <Image
                      src={session.user?.image}
                      width={40}
                      height={40}
                      alt={'User avatar icon'}
                    />
                  )
                  : session.user?.name?.split((' ')).map(str => str[0].toUpperCase())}
              </Avatar>
            </Box>
          ) : (
            <Box>
              <Button
                variant={'outlined'}
                color={'inherit'}
                onClick={() => signIn('facebook', { callbackUrl: '/' })}
                sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
              >
                Login with Facebook
              </Button>
            </Box>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
