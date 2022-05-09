import classNames from 'classnames';
import React, { FC } from 'react';

interface Props {
  className?: string;
}

export const P2: FC<Props> = ({ className, children }) => {
  return (
    <p
      className={classNames(
        className,
        'font-medium text-[1.25rem] line-height-[160%]',
      )}
    >
      {children}
    </p>
  );
};
