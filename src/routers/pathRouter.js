import ToolComponents from '../pages/ToolComponents'
import Home from '../pages/Home'

const routes = [
  {
    path: '/',
    Component: <Home/>,
    index: true,
  },
  {
    path: 'tool-components',
    Component: <ToolComponents/>,
    index: false,
  },
]

export default routes
