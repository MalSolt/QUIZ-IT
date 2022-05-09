import { FC, useRef } from 'react';
import Router from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { Dto } from '@shared';
import { BaseButton, H2, Input, MaskedInput, Select } from 'shared/ui';
import { getErrorFromFormState } from 'shared/lib/getErrorFromFormState';
import { emailRegExp } from 'shared/lib/emailRegExp';
import { phoneNumberMask } from 'shared/lib/phoneNumberMask';
import { REG_STEPS, useRegister } from '../hooks/useRegister';
import { RegisterSuccess } from './RegisterSuccess';

export const RegisterForm: FC<Dto.RegisterParamsResponseDto> = ({
  isCaptain,
  specializations,
  teamName,
}) => {
  const { step, email, submit, fetching, fetchingError } = useRegister();
  const { handleSubmit, control, register, formState, watch } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const toLogin = () => {
    Router.push('/login');
  };

  return (
    <div className="">
      {step === REG_STEPS.FORM && (
        <div className="w-full max-w-[543px] mx-auto">
          <H2 className="mb-20">Регистрация в команду: {teamName}</H2>

          <div className="w-full max-w-[424px] mx-auto">
            {fetchingError && (
              <div className="text-red mb-4">{fetchingError}</div>
            )}
            <form onSubmit={handleSubmit(submit)}>
              <Input
                className="mb-4"
                placeholder="Имя"
                disabled={fetching}
                {...register('name', { required: 'Это обязательное поле' })}
                {...getErrorFromFormState('name', formState)}
              />

              <Input
                className="mb-4"
                placeholder="Email"
                disabled={fetching}
                {...register('email', {
                  required: 'Это обязательное поле',
                  pattern: {
                    value: emailRegExp,
                    message: 'Введите валидный email адрес',
                  },
                })}
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

              <Input
                type="password"
                className="mb-4"
                placeholder="Повторите пароль"
                disabled={fetching}
                {...register('passwordConfirm', {
                  required: 'Это обязательное поле',
                  validate: value => value === password.current || "Пароли не совпадают"
                }
                )}
                {...getErrorFromFormState('passwordConfirm', formState)}
              />

              {!isCaptain && (
                <>
                  <MaskedInput
                    mask={phoneNumberMask}
                    className="mb-4"
                    placeholder="+7(000)000-00-00"
                    guide={false}
                    disabled={fetching}
                    {...register('phone', {
                      required: 'Это обязательное поле',
                    })}
                    {...getErrorFromFormState('phone', formState)}
                  />

                  <Input
                    className="mb-4"
                    placeholder="Компания"
                    disabled={fetching}
                    {...register('company', {
                      required: 'Это обязательное поле',
                    })}
                    {...getErrorFromFormState('company', formState)}
                  />

                  <Controller
                    name="specialization"
                    control={control}
                    rules={{
                      required: 'Это обязательное поле',
                    }}
                    render={({ field, formState }) => (
                      <Select<Dto.SpecializationDto>
                        className="mb-4"
                        placeholder="Профиль деятельности"
                        items={specializations}
                        renderItem={(item) => item.name}
                        renderButton={(value) => value.name}
                        disabled={fetching}
                        {...field}
                        {...getErrorFromFormState('specialization', formState)}
                      />
                    )}
                  />
                </>
              )}

              <BaseButton
                className="mt-8 mb-8"
                type="submit"
                height={72}
                paddingLeft={40}
                paddingRight={40}
                disabled={fetching}
              >
                Зарегистрироваться
              </BaseButton>

              <div className="w-[300px] mx-auto">
                Если у вас есть аккаунт то вы можете{' '}
                <span
                  className="font-bold hover:cursor-pointer underline"
                  onClick={toLogin}
                >
                  войти
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
      {step === REG_STEPS.SUCCESS && email && <RegisterSuccess email={email} />}
    </div>
  );
};
