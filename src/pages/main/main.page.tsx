import Router from 'next/router';
import { H1, H2 } from 'shared/ui';
import { BaseButton } from 'shared/ui/BaseButton';
import Pic from 'shared/assets/main_page_pic.png';
import { Container } from 'shared/ui/Container';
import { useGetMe } from 'entities/user';

export const MainPage = () => {
  const { data: me } = useGetMe();

  const toLogin = () => {
    Router.push('/login');
  };

  const toGame = () => {
    Router.push('/login');
  };

  const isAuth = !!me?.data;

  return (
    <Container>
      <div
        className="absolute top-0 right-[-68px] w-[787px] h-[1084px]"
        style={{
          backgroundImage: `url(${Pic.src})`,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="w-[493px]">
        <H1 className="mb-8">Quiz It приветствует тебя!</H1>
        <H2 className="mb-20">Мы хотим познакомиться с каждым игроком</H2>

        <BaseButton
          height={80}
          paddingLeft={34}
          paddingRight={10}
          onClick={isAuth ? toGame : toLogin}
          withImg
        >
          {isAuth ? 'Продолжить игру' : 'Войти в аккаунт'}
        </BaseButton>
      </div>
    </Container>
  );
};
