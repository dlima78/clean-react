import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Signup } from '@/presentation/pages'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/login' exact component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
