import { useQuery } from 'react-query';
import { axiosInstance } from 'shared/api/axiosInstance';
import { K } from '@shared';

type UserType = {
  id: K.UserId;
  email: string;
  name: string;
  isCaptain: boolean;
  teamId: K.TeamId;
};

export const getMeKey = () => 'users_me';

export const useGetMe = () => {
  const res = useQuery(
    getMeKey(),
    () => axiosInstance.get<UserType>('/auth/me/'),
    {
      staleTime: 60 * 60 * 1000, // 1 hour
    },
  );

  return res;
};
