import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

export default function CoAvatar() {
  return (
    <Avatar.Root className="w-8 h-8 inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="User"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        DB
      </Avatar.Fallback>
    </Avatar.Root>

  );
}
