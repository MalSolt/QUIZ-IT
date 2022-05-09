import React, { FC } from 'react';

interface Props {
  className?: string;
}

export const Link: FC<Props> = ({ className, children }) => {
  return (
    <a
      className={`font-semibold text-[1.5rem] [line-height: 32px] ${className}`}
    >
      {children}
    </a>
  );
};
