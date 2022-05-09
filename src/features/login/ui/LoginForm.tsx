import { useTeams } from 'entities/team';
import Router from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { getErrorFromFormState } from 'shared/lib/getErrorFromFormState';
import { BaseButton, H2, Input, Select } from 'shared/ui';
import { Dto } from '@shared';
import { useLogin } from '../hooks/useLogin';

export const LoginForm = () => {
  const { teams } = useTeams();
  const { submit, fetching, fetchingError } = useLogin();
  const { handleSubmit, register, formState, control } = useForm();

  const toForgotPassword = () => {
    Router.push('/forgot-password');
  };

  return (
    <div className="w-full max-w-[543px] mx-auto">
      <H2 className="mb-20">Чтобы начать игру, нужно войти в аккаунт</H2>

      <div className="w-full max-w-[424px] mx-auto">
        {fetchingError && <div className="mb-4 text-red">{fetchingError}</div>}
        <form onSubmit={handleSubmit(submit)}>
          <Controller
            name="team"
            control={control}
            rules={{
              required: 'Это обязательное поле',
            }}
            render={({ field, formState }) => (
              <Select<Dto.TeamPartialDto>
                className="mb-4"
                placeholder="Команда"
                items={teams}
                renderItem={(item) => item.name}
                renderButton={(value) => value.name}
                disabled={fetching}
                {...field}
                {...getErrorFromFormState('teamId', formState)}
              />
            )}
          />

          <Input
            className="mb-4"
            placeholder="Email"
            disabled={fetching}
            {...register('email', { required: 'Это обязательное поле' })}
            {...getErrorFromFormState('email', formState)}
          />

          <Input
            type="password"
            className="mb-4"
            placeholder="Пароль"
            disabled={fetching}
            {...register('password', { required: 'Это обязательное поле' })}
            {...getErrorFromFormState('password', formState)}
          />

          <BaseButton
            type="submit"
            height={72}
            paddingLeft={74}
            paddingRight={74}
            disabled={fetching}
          >
            Войти
          </BaseButton>
        </form>
      </div>

      <div className="w-[300px] mx-auto mt-8">
        <span
          className="font-bold hover:cursor-pointer underline"
          onClick={toForgotPassword}
        >
          Забыли пароль?
        </span>
      </div>

    </div>
  );
};
