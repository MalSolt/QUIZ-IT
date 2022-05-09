import React from 'react';
import { H2, P } from 'shared/ui';
import { Card } from './Card';
import { cardsState } from './consts';

export const Main = () => {
  const cards = cardsState.map((card) => <Card {...card} />);

  return (
    <main className="max-w-[1280px] mt-[100px]">
      <H2 className="text-center">5 причин включиться в КВИЗ IT</H2>
      <div className="flex gap-x-[32px] gap-y-[80px] items-center flex-wrap my-[120px]">
        {cards}
        <P className="max-w-[450px] ml-[80px]">
          Без регистрационных взносов и трудозатрат на организацию командной
          игры. <br />
          Мы все сделаем за вас!
        </P>
      </div>
    </main>
  );
};
