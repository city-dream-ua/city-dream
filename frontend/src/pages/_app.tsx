import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from '@mui/system';
import { theme } from '@/themes';
import { CssBaseline } from '@mui/material';
import { Header, Footer } from '@/components';

import '@/styles/globals.css'

function App({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default App;
