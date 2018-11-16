import React from 'react'
import AboutPage from '../components/AboutPage'
import AddDreamPage from '../components/AddDreamPage'
import DreamsPage from '../components/DreamsPage'
import DreamWalkerDashboardPage from '../components/DreamWalkerDashboardPage'
import EditDreamPage from '../components/EditDreamPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DreamWalkerDashboardPage} exact={true} />
        <Route path="/dreams" component={DreamsPage} />
        <Route path="/create" component={AddDreamPage} />
        <Route path="/edit/:id" component={EditDreamPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter