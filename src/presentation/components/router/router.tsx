import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Factory = {
  makeLogin: React.FC
  makeSignup: React.FC
}

const Router: React.FC<Factory> = (factory: Factory) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' exact component={factory.makeSignup} />
        <Route path='/login' exact component={factory.makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
