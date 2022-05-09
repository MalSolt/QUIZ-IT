import classNames from 'classnames';
import { FC } from 'react';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={classNames(className, 'w-[1024px] py-20 mx-auto')}>
      {children}
    </div>
  );
};
