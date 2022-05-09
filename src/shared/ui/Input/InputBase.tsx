import classNames from 'classnames';
import { FC } from 'react';

export type AnyInputProps = {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  validated?: boolean;
  errorText?: string;
};

type InputBaseProps = AnyInputProps & {
  children: React.ReactNode;
};

const OkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="#18BC5E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FailedIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9 13H11V15H9V13ZM9 5H11V11H9V5Z"
      fill="#D82525"
    />
  </svg>
);

export const InputBaseClassnames =
  'px-[24px] py-[16px] w-full outline-none placeholder:text-gray rounded-[100px]';

export const InputBase: FC<InputBaseProps> = ({
  errorText,
  className,
  disabled,
  validated,
  children,
}) => {
  return (
    <div className={className}>
      <div
        className={classNames(
          'relative w-full bg-white border border-purple-light transition-all rounded-[100px]',
          {
            'text-purple hover:border-purple focus:border-purple':
              !disabled && validated === undefined,
            'border-gray text-gray cursor-not-allowed': disabled,
            'border-red pr-[44px]': validated === false,
            'border-green pr-[44px]': validated === true,
          },
        )}
      >
        {children}
        {validated !== undefined && (
          <div className="absolute top-1/2 right-[24px] translate-y-[-50%]">
            {validated === true && <OkIcon />}
            {validated === false && <FailedIcon />}
          </div>
        )}
      </div>
      {errorText && (
        <div className="text-red text-left pl-[24px]">{errorText}</div>
      )}
    </div>
  );
};
