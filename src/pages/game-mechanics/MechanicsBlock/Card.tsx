import React, { FC } from 'react';
import { CardWrapper, H2, P } from 'shared/ui';

interface Props {
  img: string;
  title: string;
  description: string;
}

export const Card: FC<Props> = ({ img, title, description }) => {
  return (
    <CardWrapper className="w-[624px] flex justify-between h-[185px] pl-[32px] pb-[32px] pr-[38px] pt-[32px]">
      <div>
        <img src={img} />
      </div>
      <div className="w-[366px]">
        <H2 className="text-center mb-[20px]">{title}</H2>
        <P className="text-center">{description}</P>
      </div>
    </CardWrapper>
  );
};
