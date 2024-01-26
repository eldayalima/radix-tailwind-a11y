import React from 'react'
import HeaderTitle from '../components/ToolComponent/HeaderTitle'
import CoRadioGroupTool from '../components/ToolComponent/RadioGroup'
import CoCheckboxGroup from '../components/ToolComponent/CheckboxGroup'
import CoSliderGroup from '../components/ToolComponent/SliderGroup'
export default function ToolComponents() {
  return (
    <div className='min-h-[100vh] bg-[#EDF2F7] pb-20'>
      <HeaderTitle/>
      <main id='main-content' className='px-40'>
        <h2 className='text-lg font-semibold mb-5'>Activity Name</h2>
        <h3 className='mb-10'>This is a description section, lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices adipiscing risus sagittis molestie bibendum at et.</h3>
        <CoRadioGroupTool/>
        <CoCheckboxGroup/>
        <CoSliderGroup/>
      </main>
    </div>
  )
}
