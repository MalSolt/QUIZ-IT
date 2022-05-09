import React, { ReactNode } from 'react';
import { DefaultRenderSlot } from 'shared/types';
import { CardWrapper, H1, H2, P } from 'shared/ui';

type Props = {
  renderQuestions: DefaultRenderSlot;
  answers?: ReactNode;
  time?: string;
  rightAnswers?: number;
  questionsNumber?: number;
};
export const ResultsLayout = ({
  renderQuestions,
  time,
  rightAnswers,
  questionsNumber,
}: Props) => {
  return (
    <div className="pl-[80px] pr-[80px] py-[100px] m-w-[1440px] mx-auto">
      <H1>Результаты игры</H1>
      <CardWrapper className="w-[756px] h-[96px] flex justify-around items-center mt-[100px] mb-[130px] mx-auto">
        {questionsNumber !== undefined && rightAnswers !== undefined && (
          <P className="text-center">
            Правильных ответов: <br />
            {rightAnswers} из {questionsNumber}
          </P>
        )}
        {time && (
          <P className="text-center">
            Ваше время: <br />
            {time}
          </P>
        )}
      </CardWrapper>
      <H2 className="mb-[60px]">Ответы</H2>
      <div className="flex flex-col items-center gap-y-[135px]">
        {renderQuestions()}
      </div>
    </div>
  );
};
