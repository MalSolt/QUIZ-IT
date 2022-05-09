import { FC } from 'react';
import Router from 'next/router';
import { RestorePasswordForm } from 'features/restore-password';
import { ArrowButton, Container } from 'shared/ui';
import { useGetMe } from 'entities/user';

export const RestorePasswordPage: FC = () => {
    const { data: me } = useGetMe();

    const toLogin = () => {
        Router.push('/login');
    };

    if (me?.data) {
        Router.push('/game');
    }

    return (
        <Container>
            <div className="relative text-center">
                <ArrowButton className="absolute top-0 left-0" onClick={toLogin} revert>
                    Назад
        </ArrowButton>

                <RestorePasswordForm />
            </div>
        </Container>
    );
};
