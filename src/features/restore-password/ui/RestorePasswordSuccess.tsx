import { FC } from 'react';
import Router from 'next/router';
import { H2, BaseButton } from 'shared/ui';


export const RestorePasswordSuccess: FC = () => {

    const toLogin = () => {
        Router.push('/login');
    };

    return (
        <div className="w-[753px] mx-auto">
            <H2 className="w-[543px] mx-auto mb-20">Пароль успешно изменен</H2>
            <BaseButton
                onClick={toLogin}
                height={72}
                paddingLeft={74}
                paddingRight={74}
            >
                Войти
            </BaseButton>
        </div>
    );
};
