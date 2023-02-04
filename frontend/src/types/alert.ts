import { AlertProps as MUIAlertProps } from '@mui/material';

export enum EAlertStatus {
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  ERROR = 'error',
}

export type AlertProps = Partial<MUIAlertProps> & {
  id: string;
  status: EAlertStatus;
  isVisible?: boolean;
  message?: string;
}
