import classNames from 'classnames';
import { FC, ForwardedRef, forwardRef, Ref, useState } from 'react';
import { AnyInputProps, InputBase, InputBaseClassnames } from './InputBase';

type InputType = AnyInputProps & {
  type?: string;
  defaultValue?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

// eslint-disable-next-line react/display-name
export const Input: FC<InputType> = forwardRef(
  ({ className, type, defaultValue, onChange, ...props }, ref: any) => {
    return (
      <InputBase className={className} {...props}>
        <input
          ref={ref}
          {...props}
          type={type}
          className={InputBaseClassnames}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </InputBase>
    );
  },
);
