import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Community from './Components/Community/Community';

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
          path:"/chats",
          element: <h1> CHAT </h1>
        },
        {
          path:"/games",
          element: <h1> GAMES </h1>
        },
        {
          path:"/shop",
          element: <h1> SHOP </h1>
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
