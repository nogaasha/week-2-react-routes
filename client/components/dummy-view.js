import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hellodw" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component
          <Link to="/dashboard/"> Go To Dashboard </Link>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
