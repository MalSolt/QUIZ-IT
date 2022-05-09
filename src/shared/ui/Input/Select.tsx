import classNames from 'classnames';
import { Listbox as HeadlessUiListobx } from '@headlessui/react';
import { AnyInputProps, InputBase, InputBaseClassnames } from './InputBase';

type SelectProps<T> = AnyInputProps & {
  items: T[];
  value: T | undefined;
  renderItem: (item: T) => React.ReactNode;
  renderButton: (item: T) => React.ReactNode;
  onChange: () => void;
};

export function Select<T extends { id: number | string }>({
  className,
  items,
  value,
  disabled,
  placeholder,
  renderItem,
  renderButton,
  onChange,
  ...props
}: SelectProps<T>) {
  return (
    <InputBase className={className} {...props}>
      <HeadlessUiListobx value={value} onChange={onChange}>
        <HeadlessUiListobx.Button
          className={classNames(InputBaseClassnames, 'text-left')}
        >
          {value ? (
            renderButton(value)
          ) : (
            <span className="text-gray">{placeholder || ' '}</span>
          )}
        </HeadlessUiListobx.Button>
        <HeadlessUiListobx.Options className="absolute bottom-0 left-0 translate-y-[105%] w-full text-left px-[8px] py-[4px] bg-white border border-purple rounded-4 z-50">
          {items.map((item: T) => (
            <HeadlessUiListobx.Option
              key={item.id}
              value={item}
              className={({ active, selected }) =>
                classNames('transition-all', {
                  'bg-gray cursor-pointer': active,
                  'font-bold': selected,
                })
              }
            >
              {renderItem(item)}
            </HeadlessUiListobx.Option>
          ))}
        </HeadlessUiListobx.Options>
      </HeadlessUiListobx>
    </InputBase>
  );
}
