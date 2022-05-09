import { ReactNode } from 'react';

type Props = {
  header: ReactNode;
  children: ReactNode;
};
export const Layout = ({ header, children }: Props) => {
  return (
    <div className="relative grid grid-rows-layout text-purple min-h-screen overflow-hidden">
      {header}
      {children}
    </div>
  );
};
