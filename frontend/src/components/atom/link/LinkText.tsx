import Link, { LinkProps } from 'next/link';

import { Link as LinkMUI, LinkProps as LinkMUIProps } from '@mui/material';

export const LinkText = ({
  href,
  target,
  children,
  ...restProps
}: LinkProps & LinkMUIProps) => (
  <Link href={href} target={target}>
    <LinkMUI {...restProps} component={'span'}>
      {children}
    </LinkMUI>
  </Link>
);
