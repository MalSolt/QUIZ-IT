import classNames from 'classnames';
import React, { FC } from 'react';

interface Props {
  className?: string;
}

export const P: FC<Props> = ({ className, children }) => {
  return (
    <p
      className={classNames(
        className,
        'font-medium text-[1.5rem] line-height-[2rem]',
      )}
    >
      {children}
    </p>
  );
};
