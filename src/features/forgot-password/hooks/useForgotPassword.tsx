import { useRef, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { axiosInstance } from 'shared/api/axiosInstance';

export enum FORGOT_PASSWORD_STEPS {
    FORM = 'FORM',
    SUCCESS = 'SUCCESS',
}

export const useForgotPassword = () => {
    const email = useRef('');
    const [step, setStep] = useState(FORGOT_PASSWORD_STEPS.FORM);
    const [fetching, setFetching] = useState(false);
    const [fetchingError, setFetchingError] = useState<Error | null>(null);

    const submit: SubmitHandler<FieldValues> = (data) => {
        email.current = data.email;
        setFetching(true);

        return axiosInstance
            .post(`/auth/forgot-password`, data)
            .then(() => {
                setStep(FORGOT_PASSWORD_STEPS.SUCCESS);
            })
            .catch((e) => {
                setFetchingError(
                    e.response.data.message ?? 'Произошла ошибка при отправке письма на почту',
                );
            })
            .finally(() => {
                setFetching(false);
            });
    };

    return {
        step,
        email: email.current,
        submit,
        fetching,
        fetchingError,
    };
};
