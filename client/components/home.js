/* eslint-disable react/require-default-props */
import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Header from './header'
import Main from './dashboard-main'
import Profile from './dashboard-profile'
import Dashboard from './dashboard'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Hello World Dashboard
          <Switch>
            <Route exact path="/dashboard/" component={() => <Dashboard />} />
            <Route exact path="/dashboard/main" component={() => <Main />} />
            <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
          </Switch>  
          <Link to="/"> Go To Root </Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
