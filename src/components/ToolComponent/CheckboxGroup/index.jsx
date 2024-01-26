import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const dataCheckbox = [
  {
    id: "checkbox-1",
    caption: "Answer 1"
  },
  {
    id: "checkbox-2",
    caption: "Answer 2"
  },
  {
    id: "checkbox-3",
    caption: "Answer 3"
  },
  {
    id: "checkbox-4",
    caption: "Answer 4"
  },
]

function RenderCheckboxGroup(){
  return dataCheckbox.map(({caption, id})=> 
    <div key={id} className="flex items-center mx-2 my-10">
      <Checkbox.Root
        className="hover:bg-[#F0CFC9] flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] border-[#F0CFC9] border-2  outline-none"
        id={id}
        aria-label={caption}
      >
        <Checkbox.Indicator className="bg-[#BB3433] text-white w-full h-full rounded-[4px]">
          <CheckIcon className='' width={"20px"} height={"20px"}/>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="pl-[15px] text-[15px] leading-none" htmlFor={id}>
        {caption}
      </label>
    </div>
  )
}
export default function index() {
  return (
    <form className='bg-white p-10 mt-10 rounded-lg'>
      <RenderCheckboxGroup/>
    </form>
  )
}
