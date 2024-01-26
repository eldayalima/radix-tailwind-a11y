import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, GlobeIcon } from '@radix-ui/react-icons';
import SelectItem from './CoSelectItem';

export default function CoSelect() {
  return (
    <Select.Root>
      <Select.Trigger
        className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
        aria-label="Language"
      >
        <Select.Value placeholder="Select Language" />
        <Select.Icon className="text-gray-400 flex">
          <GlobeIcon />
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="id">Indonesia</SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
