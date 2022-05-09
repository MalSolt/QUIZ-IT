import { FC } from 'react';
import { H2 } from 'shared/ui';

type ForgotPasswordSuccessProps = {
    email: string;
};

export const ForgotPasswordSuccess: FC<ForgotPasswordSuccessProps> = ({ email }) => {
    return (
        <div className="w-[753px] mx-auto">
            <H2 className="w-[543px] mx-auto mb-20">Восстановление пароля</H2>
            <div className="bg-gray-light rounded-[40px] px-[220px] py-[34px] mb-28 color-black">
                Если аккаунт существует, то письмо с описанием дальнейших действий было отправлено на почту
                <span className="font-bold"> {email}</span>
            </div>
        </div>
    );
};
