import React, { FC } from 'react';

interface Props {
  className?: string;
}

export const I: FC<Props> = ({ className, children }) => {
  return (
    <i
      className={`inline-block not-italic font-medium text-[1.125rem] [line-height:160%] ${className}`}
    >
      {children}
    </i>
  );
};
