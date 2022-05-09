import { FC } from 'react';
import { H2 } from 'shared/ui';

type RegisterSuccessProps = {
  email: string;
};

export const RegisterSuccess: FC<RegisterSuccessProps> = ({ email }) => {
  return (
    <div className="w-[753px] mx-auto">
      <H2 className="w-[543px] mx-auto mb-20">Вы успешно зарегестрированы!</H2>
      <div className="bg-gray-light rounded-[40px] px-[220px] py-[34px] mb-28 color-black">
        Для завершении регистрации подтвердите email. Письмо было отправлено на
        <span className="font-bold"> {email}</span>
      </div>
    </div>
  );
};
