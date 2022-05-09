import { ReactNode } from 'react';
import { H1 } from 'shared/ui';

export const StartLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="py-[100px] mx-auto">
      <H1 className="mb-[66px]">Игровая комната</H1>
      {children}
    </div>
  );
};
