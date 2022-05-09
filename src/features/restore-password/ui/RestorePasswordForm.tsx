import { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { BaseButton, H2, Input } from 'shared/ui';
import { getErrorFromFormState } from 'shared/lib/getErrorFromFormState';
import { RESTORE_PASSWORD_STEPS, useRegister } from '../hooks/useRestorePassword';
import { RestorePasswordSuccess } from './RestorePasswordSuccess';

export const RestorePasswordForm: FC = () => {
    const { step, passwordConfirm, submit, fetching, fetchingError } = useRegister();
    const { handleSubmit, register, formState, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    return (
        <div className="">
            {step === RESTORE_PASSWORD_STEPS.FORM && (
                <div className="w-full max-w-[543px] mx-auto">
                    <H2 className="mb-20">Восстановление пароля</H2>

                    <div className="w-full max-w-[424px] mx-auto">
                        {fetchingError && (
                            <div className="text-red mb-4">{fetchingError}</div>
                        )}
                        <form onSubmit={handleSubmit(submit)}>
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

                            <BaseButton
                                className="mt-8 mb-8"
                                type="submit"
                                height={72}
                                paddingLeft={40}
                                paddingRight={40}
                                disabled={fetching}
                            >
                                ОК
                            </BaseButton>
                        </form>
                    </div>
                </div>
            )}
            {step === RESTORE_PASSWORD_STEPS.SUCCESS && password.current && passwordConfirm && <RestorePasswordSuccess />}
        </div>
    );
};
