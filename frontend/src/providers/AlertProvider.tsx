import { alertContext } from '@/context';
import { FC, ReactNode, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AlertProps } from '@/types';
import { Alert, Snackbar } from '@mui/material';

type AlertProviderProps = {
  children: ReactNode;
}

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const clearAll = () => {
    setAlerts([]);
  };

  const addAlert = (props: Omit<AlertProps, 'id'>) => {
    const id = uuid();
    setAlerts([...(alerts || []), { id, ...props }]);
    return id;
  };

  const clearId = useCallback((alertId: string) => {
    setAlerts(alerts?.filter(({ id }) => id !== alertId));
  }, [alerts]);

  return (
    <alertContext.Provider value={{
      clearId,
      addAlert,
      clearAll,
      alerts,
    }}>
      {children}

      {!!alerts.length && alerts.map(({
        id,
        message,
        status,
        isVisible,
        ...restProps
      }) => (
        <Snackbar
          key={id}
          open
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          autoHideDuration={10 * 1000}
          onClose={() => clearId(id)}
        >
          <Alert
            id={id}
            color={status}
            onClose={() => clearId(id)}
            {...restProps}
          >
            {message}
          </Alert>
        </Snackbar>
      ))}
    </alertContext.Provider>
  );
};
