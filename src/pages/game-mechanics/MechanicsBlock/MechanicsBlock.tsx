import React from 'react';
import { H1 } from 'shared/ui';
import { Card } from './Card';
import { cardsState } from './consts';

export const MechanicsBlock = () => {
  const cards = cardsState.map((card) => <Card {...card} />);

  return (
    <div className="max-w-[1280px] mx-auto">
      <H1>Механика игры</H1>
      <div className="flex gap-x-[32px] gap-y-[80px] items-center flex-wrap my-[100px]">
        {cards}
      </div>
    </div>
  );
};
