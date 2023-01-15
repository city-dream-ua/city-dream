import { ReactNode } from 'react';

import { Footer, Header } from '@components';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header/>
    {children}
    <Footer/>
  </>
)
