import React, { FC } from 'react';
import { CardWrapper, P } from 'shared/ui';

interface Props {
  img: string;
  description: string;
}

export const Card: FC<Props> = ({ img, description }) => {
  return (
    <CardWrapper className="flex items-center flex-col w-[362px] h-[488px] pt-[40px]">
      <div>
        <img src={img} />
      </div>
      <P className="text-center mt-[40px]">{description}</P>
    </CardWrapper>
  );
};
