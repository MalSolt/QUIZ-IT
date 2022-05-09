import classNames from 'classnames';
import { ReactNode } from 'react';
import { H2, P } from 'shared/ui';
import { Timer } from './timer'

type Props = {
  currentQuestionNumber: number;
  questionsNumber: number;
  points?: number;
  difficulty?: number;
  action?: ReactNode;
  className?: string;
  startedTime?: Date;
  duration?: number;
};
export const CurrentQuestionInfo = ({
  currentQuestionNumber,
  questionsNumber,
  points,
  difficulty,
  action,
  className,
  startedTime,
  duration
}: Props) => {
  return (
    <div className={classNames(className, '')}>
      <H2 className="bg-gray-light rounded-[50px] text-center py-[14px]">
        Вопрос {currentQuestionNumber} из {questionsNumber}
      </H2>
      {(points !== undefined ||
        difficulty !== undefined ||
        action !== undefined) && (
          <div className="bg-gray-light rounded-[50px] mt-[16px] pl-[40px] pr-[17px] py-[40px]">
            {points && <P className="mb-[24px]">Всего баллов: {points}</P>}
            {difficulty && (
              <P className="mb-[32px]">Сложность вопроса: {difficulty}</P>
            )}
            {action}
          </div>
        )}
      {!!duration && !!startedTime && <Timer startedTime={startedTime} duration={duration} />}
    </div>
  );
};
