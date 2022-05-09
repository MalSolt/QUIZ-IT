import React, { FC } from 'react';

interface Props {
  className?: string;
}

export const H1: FC<Props> = ({ children, className }) => {
  return (
    <h1 className={`font-bold text-[4rem] leading-[74px] ${className}`}>
      {children}
    </h1>
  );
};
