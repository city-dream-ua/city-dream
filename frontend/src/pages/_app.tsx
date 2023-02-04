import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from '@mui/system';
import { theme } from '@/themes';
import { CssBaseline } from '@mui/material';

import '@/styles/globals.css';
import { AlertProvider } from '@/providers';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AlertProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
      </AlertProvider>
    </SessionProvider>
  );
}

export default App;
