import { FormState } from 'react-hook-form';

export const getErrorFromFormState = (
  name: string,
  formState: FormState<any>,
) => {
  const { errors = {} } = formState;

  if (`${name}` in errors) {
    const errorText = errors[name]!.message;

    return { errorText };
  }

  return { errorText: '' };
};
