import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon } from '@radix-ui/react-icons';

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Select.Item
    className={classnames(
      'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
      <CheckIcon />
    </Select.ItemIndicator>
  </Select.Item>
));

export default SelectItem;
