import React from 'react'
import Nav from '../Layout/Nav'
import SubNav from './SubNav'
import BreadcrumbLinks from './Breadcrumb'
function index({children}) {
  return (
    <>
      <Nav />
      <SubNav />
      <BreadcrumbLinks />
      {children}
    </>
  )
}

export default index
