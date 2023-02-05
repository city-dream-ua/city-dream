import { useEffect, useState } from 'react';

export const useHTML = (text: string) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return isClient ? text : '';
}
