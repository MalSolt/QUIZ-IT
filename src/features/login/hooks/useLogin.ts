import { Dto } from '@shared';
import Router from 'next/router';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { axiosInstance } from 'shared/api/axiosInstance';
import { authStore } from 'shared/lib/auth';
import { getMeKey } from 'entities/user';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const [fetching, setFetching] = useState(false);
  const [fetchingError, setFetchingError] = useState<Error | null>(null);

  const submit: SubmitHandler<FieldValues> = (data) => {
    setFetching(true);
    return axiosInstance
      .post<Dto.LoginUserResponseDto>(`/auth/login`, {
        email: data.email,
        password: data.password,
        teamId: data.team?.id,
      } as Dto.LoginUserDto)
      .then(({ data }) => {
        queryClient.invalidateQueries(getMeKey());
        authStore.setToken(data.access_token);
        Router.push('/game');
      })
      .catch((e) => {
        setFetchingError(
          e.response.data.message ?? 'Произошла ошибка вовремя авторизации',
        );
      })
      .finally(() => {
        setFetching(false);
      });
  };

  return {
    fetching,
    fetchingError,
    submit,
  };
};
