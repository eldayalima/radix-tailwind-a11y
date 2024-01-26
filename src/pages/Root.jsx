import React from 'react'
import Headers from '../components/Headers'
import {Outlet} from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <Headers/>
      <Outlet/>
    </div>
  )
}
