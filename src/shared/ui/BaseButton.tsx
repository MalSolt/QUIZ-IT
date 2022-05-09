import classNames from 'classnames';
import React, { FC } from 'react';
import { ArrowButton } from './ArrowButton';

interface Props {
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  withImg?: boolean;
  height: number;
  paddingLeft?: number;
  paddingRight?: number;
  disabled?: boolean;
  onClick?: () => void;
}

export const BaseButton: FC<Props> = ({
  type = 'button',
  height,
  paddingLeft,
  paddingRight,
  withImg,
  className,
  onClick,
  children,
  disabled,
}) => {
  return (
    <div className={classNames(className, 'inline-block')}>
      <button
        type={type}
        disabled={disabled}
        className={classNames(
          `flex justify-center items-center rounded-[40px] text-[24px] font-medium`,
          { 'bg-yellow': !disabled },
          { 'bg-gray': disabled },
        )}
        style={{ height, paddingLeft, paddingRight }}
        onClick={onClick}
      >
        {children}
        {withImg && <ArrowButton variant="secondary" className="ml-[40px]" />}
      </button>
    </div>
  );
};
