import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Product from './components/Product'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/products" component={Product} />
      <Route exact path="/not-found" component={NotFoundRoute} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
