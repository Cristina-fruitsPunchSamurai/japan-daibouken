
import Home from './views/Home'
import Planning from './views/Planning'
import Card from './components/Card'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/planning',
    element: <Planning />,
  },
  {
    path:'/card',
    element: <Card />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
