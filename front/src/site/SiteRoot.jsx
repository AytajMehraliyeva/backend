import React from 'react'
import Header from './Header'
import {Outlet} from 'react-router'
const SiteRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default SiteRoot