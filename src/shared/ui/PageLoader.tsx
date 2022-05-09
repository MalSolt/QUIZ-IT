import { FC } from 'react';
import { Loader } from './Loader';

type PageLoaderProps = {
  children?: React.ReactNode;
};

export const PageLoader: FC<PageLoaderProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Loader />
      <div className="mt-4 text-center w-3/12">{children}</div>
    </div>
  );
};
