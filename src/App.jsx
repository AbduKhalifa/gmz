import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Community from './Components/Community/Community';
import Authentication from './Components/Authentication/Authentication';
import { useSelector } from 'react-redux';

import ProtectedAuthenticated from './Components/ProtectedRoutes/ProtectedAuthenticated';
import Profile from './Components/Profile/Profile';
import Shop from './Components/Shop/Shop';

function App() {

  const { isLogin } = useSelector(rds => rds.uReducer);

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Community />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/groups",
          element: <h1> Groups </h1>
        },
        {
          path: "/clans",
          element: <h1> CLANs </h1>
        },
        {
          path: "/account",
          element: <ProtectedAuthenticated where={"/"} check={isLogin}>  <Authentication /> </ProtectedAuthenticated>
        },
        {
          path: "/challengs",
          element: <h1> challengs  </h1>
        },
        {
          path: "/profile/:id",
          element: <ProtectedAuthenticated where={"/account"} check={!isLogin}> <Profile /> </ProtectedAuthenticated>
        },
      ]
    },
    {
      path: "*",
      element: <h1>ERROR</h1>
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
