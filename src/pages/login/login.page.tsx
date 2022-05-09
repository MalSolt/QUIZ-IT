import Router from 'next/router';
import { LoginForm } from 'features/login/ui/LoginForm';
import { ArrowButton } from 'shared/ui';
import { Container } from 'shared/ui/Container';
import { useGetMe } from 'entities/user';

export const LoginPage = () => {
  const { data: me } = useGetMe();

  const toMain = () => {
    Router.push('/');
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

        <LoginForm />
      </div>
    </Container>
  );
};
