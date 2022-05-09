import classNames from 'classnames';
import { P } from 'shared/ui';
import { TQuestionContent } from '../types';

type Props = {
  className?: string;
  content: TQuestionContent;
  variant: 'light' | 'dark';
};

const STATE_BG = {
  dark: 'bg-gray-light',
  light: 'bg-white',
};

export function QuestionContent({
  className,
  content: { text, smallText, imageSrc },
  variant,
}: Props) {
  return (
    <div className="grid grid-col-1 gap-y-8">
      {smallText && <P className="text-center">{smallText}</P>}
      {text && (
        <P
          className={classNames(
            className,
            'p-[40px] rounded-[48px]',
            STATE_BG[variant],
          )}
        >
          {text}
        </P>
      )}
      {imageSrc && (
        <div className="flex justify-center">
          <img src={`${process.env.NEXT_PUBLIC_API_URL}${imageSrc}`} />
        </div>
      )}
    </div>
  );
}
