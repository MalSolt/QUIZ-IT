import classNames from 'classnames';
import React, { FC } from 'react';
import { P } from '.';

interface Props {
  text: string;
  className?: string;
  variant: 'light' | 'dark';
}

export const TextQuestion: FC<Props> = ({ text, className, variant }) => {
  return (
    <div
      className={classNames(className, 'p-[40px] rounded-[48px]', {
        'bg-gray-light': variant === 'dark',
        'bg-white': variant === 'light',
      })}
    >
      <P>{text}</P>
    </div>
  );
};
