import classNames from 'classnames';
import { FC } from 'react';

type ArrowButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  revert?: boolean;
  onClick?: () => void;
};

export const ArrowButton: FC<ArrowButtonProps> = ({
  children,
  className,
  variant = 'primary',
  revert,
  onClick,
}) => {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';

  return (
    <div
      className={classNames(
        className,
        'flex items-center hover:cursor-pointer',
      )}
    >
      <div
        className={classNames('flex relative w-[70px]', {
          'rotate-180': revert === true,
        })}
        onClick={onClick}
      >
        <svg
          className={classNames('absolute bottom-[50%] translate-y-2/4', {
            'stroke-purple': isSecondary,
            'stroke-black': isPrimary,
          })}
          width="57"
          height="16"
          viewBox="0 0 57 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8L55 8M55 8L47.8947 15M55 8L47.8947 1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div
          className={classNames(
            'rounded-full w-[42px] h-[42px] ml-auto self-center',
            {
              'bg-white': isSecondary,
              'bg-yellow': isPrimary,
            },
          )}
        ></div>
      </div>
      {children && <span className="ml-4 text-black"> {children}</span>}
    </div>
  );
};
