import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { BaseButton, H2, Input } from 'shared/ui';
import { getErrorFromFormState } from 'shared/lib/getErrorFromFormState';
import { emailRegExp } from 'shared/lib/emailRegExp';
import { FORGOT_PASSWORD_STEPS, useForgotPassword } from '../hooks/useForgotPassword';
import { ForgotPasswordSuccess } from './ForgotPasswordSuccess';

export const ForgotPasswordForm: FC = () => {
    const { step, email, submit, fetching, fetchingError } = useForgotPassword();
    const { handleSubmit, register, formState } = useForm();

    return (
        <div className="">
            {step === FORGOT_PASSWORD_STEPS.FORM && (
                <div className="w-full max-w-[543px] mx-auto">
                    <H2 className="mb-20">Введите email</H2>

                    <div className="w-full max-w-[424px] mx-auto">
                        {fetchingError && (
                            <div className="text-red mb-4">{fetchingError}</div>
                        )}
                        <form onSubmit={handleSubmit(submit)}>
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
            {step === FORGOT_PASSWORD_STEPS.SUCCESS && email && <ForgotPasswordSuccess email={email} />}
        </div>
    );
};
