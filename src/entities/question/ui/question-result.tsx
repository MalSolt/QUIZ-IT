import { P } from 'shared/ui';
import { K } from '@shared';
import { TQuestionAnswerContent, TQuestionContent } from '../types';
import { QuestionAnswer } from './question-answer';
import { QuestionContent } from './question-content';

type Props = {
  questionNumber: number;
  content: TQuestionContent;
  answers: { content: TQuestionAnswerContent; state?: K.AnswerButtonType }[];
};
export function QuestionResult({ content, questionNumber, answers }: Props) {
  return (
    <div className="w-[1020px] bg-gray-light px-[130px] py-[55px] rounded-[80px]">
      <P className="mb-[40px]">Вопрос {questionNumber}</P>
      <QuestionContent content={content} variant="light" />
      <div className="grid grid-cols-[1fr_1fr] gap-x-[36px] gap-y-[16px] mt-[56px]">
        {answers.map(({ content, state }, index) => (
          <QuestionAnswer
            key={index}
            content={content}
            state={state}
            disabled
          />
        ))}
      </div>
    </div>
  );
}
