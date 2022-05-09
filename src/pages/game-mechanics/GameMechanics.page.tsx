import React from 'react';
import { MechanicsBlock } from './MechanicsBlock/MechanicsBlock';
import { RulesBlock } from './RulesBlock/RulesBlock';

export const GameMechanicsPage = () => {
  return (
    <div className="pt-[100px] pl-[80px] pr-[80px]">
      <MechanicsBlock />
      <RulesBlock />
    </div>
  );
};
