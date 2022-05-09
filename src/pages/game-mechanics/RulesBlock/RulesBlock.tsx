import React from 'react';
import { H2, P } from 'shared/ui';
import { Card } from './Card';
import { cardsState } from './consts';

export const RulesBlock = () => {
  const cards = cardsState.map((card) => <Card {...card} />);

  return (
    <div className="max-w-[1280px] mx-auto">
      <H2>Правила игры</H2>
      <div className="flex gap-x-[97px] gap-y-[48px] items-center flex-wrap my-[100px]">
        {cards}
        <div className="max-w-[720px] ml-[60px]">
          <H2 className="text-center mb-[48px]">Игра бесплатная!</H2>
          <P>
            Вопросы викторины будут составлены на it-тематику. Без углубления в
            технологии, на эрудицию, логику и интуицию!
          </P>
        </div>
      </div>
    </div>
  );
};
