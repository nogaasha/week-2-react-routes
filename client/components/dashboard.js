import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
          This is Dashboard
          <div><Link to="/dashboard/profile/bf20e70d-e50c-4bf9-8092-69c044c07b08"> Go To Profile </Link></div>
          <Link to="/dashboard/main"> Go To Main </Link>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
