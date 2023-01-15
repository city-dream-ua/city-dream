import { ReactElement, ReactNode } from 'react';
import { Footer, Header } from '@/components';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header/>
    {children}
    <Footer/>
  </>
);

// export const Layout = (page: ReactElement) => (
//   <LayoutWrapper>
//     {page}
//   </LayoutWrapper>
// )
