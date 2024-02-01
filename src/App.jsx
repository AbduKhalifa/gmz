import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Community from './Components/Community/Community';
import Authentication from './Components/Authentication/Authentication';

function App() {


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
          element: <h1> SHOP </h1>
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
          element: <Authentication />
        },
        {
          path: "/challengs",
          element: <h1> challengs  </h1>
        },
        {
          path: "/profile/:id",
          element: <h1> PROFILE  </h1>
        },
      ]
    },
    {
      path: "*",
      element: <h1>ERROR</h1>
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
