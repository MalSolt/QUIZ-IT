import React, { FC } from 'react';

interface Props {
  className?: string;
}

export const H2: FC<Props> = ({ className, children }) => {
  return (
    <div className={`font-bold text-[2rem] line-height-[39px] ${className}`}>
      {children}
    </div>
  );
};
