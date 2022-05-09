import { FC } from 'react';
import Router from 'next/router';
import { ConfirmEmail } from 'features/confirm-email';
import { ArrowButton } from 'shared/ui';
import { Container } from 'shared/ui/Container';
import { useGetMe } from 'entities/user';

export const ConfirmEmailPage: FC = () => {
    const { data: me } = useGetMe();

    const toMain = () => {
        Router.push('/login');
    };

    if (me?.data) {
        Router.push('/game');
    }

    return (
        <Container>
            <div className="relative text-center">
                <ArrowButton className="absolute top-0 left-0" onClick={toMain} revert>
                    Назад
                </ArrowButton>

                <ConfirmEmail />
            </div>
        </Container>
    );
};
