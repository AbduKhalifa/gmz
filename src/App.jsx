import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Community from './Components/Community/Community';
import Authentication from './Components/Authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';

import ProtectedAuthenticated from './Components/ProtectedRoutes/ProtectedAuthenticated';
import Profile from './Components/Profile/Profile';
import Shop from './Components/Shop/Shop';
import { checkAboutUserToken } from './redux/uSlice';
import { useEffect } from 'react';
import ClanPage from './Components/ClanPage/ClanPage';

function App() {

  const dispatch = useDispatch();
  const userToken = localStorage.getItem("tkn");
  const { isLogin } = useSelector(rds => rds.uReducer);


  useEffect(() => {
    dispatch(checkAboutUserToken(userToken))
  }, [])


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
          element: <ClanPage />
        },
        {
          path: "/best-clans/",
          element: <h1> Best clan Page</h1>
        },
        {
          path: "/local-clans/",
          element: <h1> local clan Page</h1>
        },
        {
          path: "/new-clans/",
          element: <h1> new clan Page</h1>
        },
        {
          path: "/prominent-clans/",
          element: <h1> prominent clan Page</h1>
        },
        {
          path: "/clan/:id",
          element: <h1> CLAN ID</h1>
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
