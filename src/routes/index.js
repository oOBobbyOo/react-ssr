import Home from '../pages/Home'
import User from '../pages/User'
import NotFound from '../pages/NotFound'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes
