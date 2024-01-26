import React from 'react'
import {ChevronLeftIcon} from '@radix-ui/react-icons'
export default function HeaderTitle() {
  return (
    <div className='flex justify-center py-10 bg-gray-200 items-center px-40'>
      <a href='/' className='min-w-fit border border-gray-400 p-1 rounded-md text-gray-700'>
        <ChevronLeftIcon aria-label='back to dashboard'/>
      </a>
      <h1 className='font-bold grow text-center' aria-label='you are in activity'>Digital Sprint</h1>
    </div>
  )
}
