import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { axiosInstance } from 'shared/api/axiosInstance';

export enum RESTORE_PASSWORD_STEPS {
    FORM = 'FORM',
    SUCCESS = 'SUCCESS',
}

export const useRegister = () => {
    const router = useRouter();
    const { token } = router.query;
    const passwordConfirm = useRef('');
    const [step, setStep] = useState(RESTORE_PASSWORD_STEPS.FORM);
    const [fetching, setFetching] = useState(false);
    const [fetchingError, setFetchingError] = useState<Error | null>(null);

    const submit: SubmitHandler<FieldValues> = (data) => {
        passwordConfirm.current = data.passwordConfirm

        setFetching(true);
        return axiosInstance
            .post(`/auth/restore-password`, {
                password: data.password,
                token
            })
            .then(() => {
                setStep(RESTORE_PASSWORD_STEPS.SUCCESS);
            })
            .catch((e) => {
                setFetchingError(
                    e.response.data.message ?? 'Произошла ошибка при восстановлении пароля',
                );
            })
            .finally(() => {
                setFetching(false);
            });
    };

    return {
        step,
        passwordConfirm: passwordConfirm.current,
        submit,
        fetching,
        fetchingError,
    };
};
