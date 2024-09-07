/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
   <Layout>
    <h1>Sorry nof Found Page </h1>
    <div className="bg-red-500 p-4 mt-4 rounded-md shadow-sm shadow-slate-400 inline-block">
    <NavLink to="/">
      Back to Home
    </NavLink>
    </div>
   </Layout>
  )
}

export default NotFound