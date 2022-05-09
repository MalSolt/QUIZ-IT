import { FC } from 'react';
import Router from 'next/router';
import { H2, BaseButton } from 'shared/ui';

export const ConfirmEmail: FC = () => {

    const toLogin = () => {
        Router.push('/login');
    };

    return (
        <>
            <div className="w-full max-w-[543px] mx-auto">
                <H2 className="mb-20">Подтверждение успешно завершено</H2>
            </div>
            <BaseButton
                onClick={toLogin}
                height={72}
                paddingLeft={74}
                paddingRight={74}
            >
                Войти
            </BaseButton>
        </>
    );
};



