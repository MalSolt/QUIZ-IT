import React, { FC } from 'react';
import { CardWrapper, H2, P } from 'shared/ui';

interface Props {
  img: string;
  title: string;
  description: string;
}

export const Card: FC<Props> = ({ img, title, description }) => {
  return (
    <CardWrapper className="w-[624px] flex justify-between h-[270px] pl-[40px] pb-[40px] pr-[25px] pt-[45px]">
      <div>
        <img src={img} />
      </div>
      <div className="w-[355px]">
        <H2 className="text-center mb-[30px]">{title}</H2>
        <P>{description}</P>
      </div>
    </CardWrapper>
  );
};
