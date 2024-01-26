import React from 'react'

export default function CoSidebarNav() {
  return (
    <aside className='w-2/12 mx-10 mt-10' aria-label='filter activity'>
      <h2 className='font-bold text-[#C43D27] text-xl'>Welcome, Budi Alexander</h2>
      <ul className='flex-col mt-10'>
        <li className='mt-5'>
          <a href="?sortBy=all" className='font-semibold text-[#4B5563]'>
            All Activity
          </a>
        </li>
        <li className='mt-5'>
          <a href="?sortBy=priorty" className='font-semibold text-[#4B5563]'>
            Need to Complete
          </a>
        </li>
        <li className='mt-5'>
          <a href="?sortBy=finished" className='font-semibold text-[#4B5563]'>
            Finished Activity
          </a>
        </li>
      </ul>
    </aside>
  )
}
