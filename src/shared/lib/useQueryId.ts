import { useRouter } from 'next/router';
import { K } from '@shared';

export const useQueryId = <T extends number>(key: string): T => {
  const Router = useRouter();
  const value = Router.query[key];

  if (!value || Array.isArray(value)) {
    return K.parseId('0');
  }
  return K.parseId(value);
};
