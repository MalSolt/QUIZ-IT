import { FC, forwardRef, useRef } from 'react';
import ReactTextMaskInput, { MaskedInputProps } from 'react-text-mask';
import { AnyInputProps, InputBase, InputBaseClassnames } from './InputBase';

type ReactTextMaskInputProps = AnyInputProps & {
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & Pick<
    MaskedInputProps,
    | 'mask'
    | 'guide'
    | 'placeholderChar'
    | 'keepCharPositions'
    | 'pipe'
    | 'showMask'
  >;

// eslint-disable-next-line react/display-name
export const MaskedInput: FC<ReactTextMaskInputProps> = forwardRef(
  (
    {
      className,
      type,
      mask,
      guide,
      placeholderChar,
      keepCharPositions,
      pipe,
      showMask,
      value,
      onChange,
      ...props
    },
    ref: any,
  ) => {
    const inputRef = useRef();

    return (
      <InputBase className={className} {...props}>
        <ReactTextMaskInput
          {...props}
          mask={mask}
          guide={guide}
          placeholderChar={placeholderChar}
          keepCharPositions={keepCharPositions}
          pipe={pipe}
          showMask={showMask}
          value={value}
          onChange={onChange}
          render={(textMaskRef: any, p) => (
            <input
              className={InputBaseClassnames}
              {...p}
              ref={(node: any) => {
                textMaskRef(node);
                inputRef.current = node;
                ref(node);
              }}
            />
          )}
        />
      </InputBase>
    );
  },
);
