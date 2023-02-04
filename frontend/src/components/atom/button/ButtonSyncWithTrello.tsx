import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useSession } from 'next-auth/react';
import { TrelloAPI } from '@/api-utils';
import { useAlertContext } from '@/context';
import { EAlertStatus } from '@/types';

export const ButtonSyncWithTrello: FC<ButtonProps> = ({
  children,
  ...restProps
}) => {
  const sessionData = useSession();
  const { addAlert } = useAlertContext();

  const onClick = () => {
    //@ts-ignore
    const token = sessionData?.data?.token;

    if (token) {
      TrelloAPI.sync(token).then(res => {
        if (res.ok) {
          addAlert({
            status: EAlertStatus.SUCCESS,
            message: 'Site successfully synchronized with Trello',
          });
        } else {
          addAlert({
            status: EAlertStatus.ERROR,
            message: res.statusText || 'Something went wrong during synchronization',
          });
        }
      });
    }
  };

  return !!sessionData.data?.user ? (
    <Button onClick={onClick} variant={'outlined'}
            color={'info'} {...restProps}>
      {children || 'Sync with Trello'}
    </Button>
  ) : null;
};
