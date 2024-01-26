import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  ChevronDownIcon,
} from '@radix-ui/react-icons';
import DropdownItems from './DropdownItems';

function CoDropdownMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className=" inline-flex items-center justify-center text-violet11  outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Menu User"
          type="button"
        >
          <ChevronDownIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownItems>
            Profile
          </DropdownItems>
          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
          <DropdownItems>
            FAQ
          </DropdownItems>
          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
          <DropdownItems>
            Logout
          </DropdownItems>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default CoDropdownMenu;
