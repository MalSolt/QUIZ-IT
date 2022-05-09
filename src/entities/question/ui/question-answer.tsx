import { K } from '@shared';
import classNames from 'classnames';
import React from 'react';
import { TQuestionAnswerContent } from '../types';

const STATE_BG = {
  default: 'bg-purple-light',
  wrong: 'bg-red',
  right: 'bg-green',
  selected: 'bg-yellow',
};

const STATE_BORDER = {
  default: 'border-white',
  wrong: 'border-red',
  right: 'border-green',
  selected: 'border-yellow',
};

type Props = {
  className?: string;
  content: TQuestionAnswerContent;
  state?: K.AnswerButtonType;
  disabled?: boolean;
  onClick?: () => void;
  answersNumber?: number;
};

type AnswerButtonProps = Props & {
  renderContent: (content: TQuestionAnswerContent) => React.ReactNode;
  setClassnames: (
    content: TQuestionAnswerContent,
    state: K.AnswerButtonType,
  ) => string;
};

export function QuestionAnswer(props: Props) {
  const renderContent = (content: TQuestionAnswerContent) => {
    if (content.text) {
      return <span>{content.text}</span>;
    } else if (content.imageSrc) {
      return (
        <div
          className="w-full h-0 bg-no-repeat bg-cover pt-[66.64%]"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${content.imageSrc})`,
          }}
        />
      );
    }

    return null;
  };

  const setClassnames = (
    content: TQuestionAnswerContent,
    state: K.AnswerButtonType,
  ): string => {
    if (content.text) {
      return classNames(
        STATE_BG[state],
        'rounded-[50px] text-white text-[1.5rem] leading-[2rem] font-medium h-[70px] px-10 flex items-center justify-center',
      );
    } else if (content.imageSrc) {
      return classNames(STATE_BORDER[state], 'bg-transparent border-8');
    }

    return '';
  };

  if (props.content) {
    return (
      <AnswerButton
        {...props}
        renderContent={renderContent}
        setClassnames={setClassnames}
      />
    );
  }

  return null;
}

export const AnswerButton = ({
  content,
  className,
  disabled,
  onClick,
  renderContent,
  setClassnames,
  state = 'default',
  answersNumber = 0,
}: AnswerButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        'relative',
        setClassnames(content, state),
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {answersNumber > 0 && renderAnswersNumber(answersNumber)}
      {renderContent(content)}
    </button>
  );
};

const renderAnswersNumber = (answers: number) =>
  answers ? (
    <span className="absolute top-0 right-0 text-[1rem] rounded-full w-6 h-6 flex justify-center items-center bg-purple drop-shadow-sm">
      {answers}
    </span>
  ) : null;
