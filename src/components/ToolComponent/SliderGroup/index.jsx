import React from 'react'
import * as Slider from '@radix-ui/react-slider';

export default function SliderGroup() {
  let renderSteper = (limit) => {
    let step = []
    for (let i = 0; i < limit; i++) {
      step.push(<p key={i} className='text-[#3E4650]'>{i*10}</p>)
    }
    return step
  }
  return (
    <div className='bg-white p-10 mt-10 rounded-lg'>
      <div className='flex justify-center mb-5'>
        <div className='w-[80%] flex justify-between text-[#3E4650]'>
          <p>Sangat Tidak Setuju</p>
          <p>Setuju</p>
          <p>Sangat Setuju</p>
        </div>
      </div>
      <form className='flex justify-center mb-5'>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-[80%] h-5"
          defaultValue={[50]}
          max={100}
          step={10}
        >
          <Slider.Track className="bg-[#CBD3DB] relative grow rounded-full h-[6px]">
            <Slider.Range className="absolute bg-[#C43D27] rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-[#C43D27] rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-[#C43D27]"
            aria-label="Volume"
          />
        </Slider.Root>
      </form>
      <div className='flex justify-center'>
        <div className='w-[80%] flex justify-between'>
         {renderSteper(11)}
        </div>
      </div>
    </div>
  )
}
