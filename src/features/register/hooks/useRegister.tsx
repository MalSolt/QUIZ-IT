import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { axiosInstance } from 'shared/api/axiosInstance';

export enum REG_STEPS {
  FORM = 'FORM',
  SUCCESS = 'SUCCESS',
}

export const useRegister = () => {
  const router = useRouter();
  const { registrationKey } = router.query;
  const email = useRef('');
  const [step, setStep] = useState(REG_STEPS.FORM);
  const [fetching, setFetching] = useState(false);
  const [fetchingError, setFetchingError] = useState<Error | null>(null);

  const submit: SubmitHandler<FieldValues> = (data) => {
    email.current = data.email;
    
    setFetching(true);
    return axiosInstance
      .post(`/auth/register?registrationKey=${registrationKey}`, data)
      .then(() => {
        setStep(REG_STEPS.SUCCESS);
      })
      .catch((e) => {
        setFetchingError(
          e.response.data.message ?? 'Произошла ошибка вовремя регистрации',
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
