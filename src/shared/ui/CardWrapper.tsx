import React, { FC } from 'react';

interface Props {
  className?: string;
}

export const CardWrapper: FC<Props> = ({ children, className }) => {
  return (
    <div className={`border border-purple rounded-[80px] ${className}`}>
      {children}
    </div>
  );
};
