import { FC } from 'react';
import Router from 'next/router';
import { Dto } from '@shared';
import { RegisterForm } from 'features/register/ui/RegisterForm';
import { ArrowButton, Container } from 'shared/ui';
import { useGetMe } from 'entities/user';

export const RegisterPage: FC<Dto.RegisterParamsResponseDto> = ({
  isCaptain,
  specializations,
  teamName,
}) => {
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

        <RegisterForm
          isCaptain={isCaptain}
          specializations={specializations}
          teamName={teamName}
        />
      </div>
    </Container>
  );
};
