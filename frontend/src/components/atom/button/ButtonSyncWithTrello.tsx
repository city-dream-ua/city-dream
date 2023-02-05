import { FC, useState } from 'react';
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
  const [disabled, setDisabled] = useState<boolean>(false);
  const { addAlert } = useAlertContext();

  const onClick = () => {
    //@ts-ignore
    const token = sessionData?.data?.token;
    setDisabled(true);

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
            message: res.statusText || 'Something went wrong during the synchronization',
          });
        }
        setDisabled(false);
      })
    }
  };

  return !!sessionData.data?.user ? (
    <Button
      onClick={onClick}
      variant={'outlined'}
      disabled={disabled}
      color={'info'}
      {...restProps}
    >
      {children || 'Sync with Trello'}
    </Button>
  ) : null;
};
