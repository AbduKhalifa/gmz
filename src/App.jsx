import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';

function App() {


  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />
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
