import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import List from './pages/List';
import Home from "./pages/Home";
import News from "./pages/News";
import Tweets from './pages/Tweets';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/list',
        element: <List/>,
        children: [
          {
            path: ':page'
          }
        ]
      },
      {
        path: '/news',
        element: <News/>
      },
      {
        path: '/tweets',
        element: <Tweets/>
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
