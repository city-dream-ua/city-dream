import { createContext, useContext } from 'react';
import { AlertProps } from '@/types';

export const alertContext = createContext<{
  alerts: AlertProps[];
  addAlert: (props: Omit<AlertProps, 'id'>) => string | null;
  clearId: (id: string) => void;
  clearAll: () => void;
}>({
  alerts: [],
  addAlert: (props) => '',
  clearId: (id) => {},
  clearAll: () => {},
});

export const useAlertContext = () => useContext(alertContext);
