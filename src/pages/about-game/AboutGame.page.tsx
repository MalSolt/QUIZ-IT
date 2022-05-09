import React from 'react';
import { H1, P } from 'shared/ui';
import { Main } from './Main';

export const AboutGamePage = () => {
  return (
    <div className="pt-[100px] pl-[80px] pr-[80px] mx-auto">
      <H1 className="mb-[42px]">Об игре</H1>
      <P className="max-w-[1120px]">
        Онлайн викторина КВИЗ IT - интеллектуальный батл, в котором участвуют
        it-компании. Без ограничений по географии, стеку технологий, религиозным
        убеждениям. Без социальной дистанции! КВИЗ IT - больше, чем игра.
      </P>
      <Main />
    </div>
  );
};
