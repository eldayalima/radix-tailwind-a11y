import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function DropdownItems({ children }) {
  return (
    <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-gray-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-red-300 data-[highlighted]:text-red-500">
      {children}
    </DropdownMenu.Item>
  );
}
