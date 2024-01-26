import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group';

const dummyDataRadio = [
  {
    title: 'Sangat Tidak Setuju',
    id: 'opt1',
    value: 1
  },
  {
    title: 'Tidak Setuju',
    id: 'opt2',
    value: 2
  },
  {
    title: 'Agak Tidak Setuju',
    id: 'opt3',
    value: 3
  },
  {
    title: 'Agak Setuju',
    id: 'opt4',
    value: 4
  },
  {
    title: 'Setuju',
    id: 'opt5',
    value: 5
  },
  {
    title: 'Sangat Setuju',
    id: 'opt6',
    value: 6
  },
]
function RenderAnswerOpt(){
  let renderData = dummyDataRadio.map(({value, id, title}) => {
    return (
      <div className="flex items-center m-2" id='radio-answer'>
        <RadioGroup.Item
          className="w-[25px] h-[25px] rounded-full hover:bg-red-50 outline-none cursor-default border-2 border-[#F0CFC9]"
          value={value}
          id={id}
          aria-label={title}
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-[#C43D27] after:border-[#C43D27]" />
        </RadioGroup.Item>
        <label className=" text-[15px] leading-none pl-[15px]" htmlFor={id}>
          {title}
        </label>
      </div>
    )
  })
  return renderData
}

export default function CoRadioGroupTool() {
  return (
    <main id='main-content' className='bg-white'>
      <h4 className='font-medium' aria-labelledby='radio-answer'>Saya melakukan pengkajian perubahan tren pasar yang kerap terjadi banyak perubahan</h4>
      <form>
        <RadioGroup.Root
          className="flex flex-col gap-2.5"
          defaultValue={3}
          aria-label="View answers options"
        >
          <RenderAnswerOpt/>
        </RadioGroup.Root>
      </form>
    </main>
  )
}
