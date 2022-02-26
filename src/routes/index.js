import Home from '../pages/Home'
import User from '../pages/User'
import Count from '../pages/Count'
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
    path: '/count',
    component: Count
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes
