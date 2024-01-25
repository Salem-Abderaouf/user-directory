import './App.css'
import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Hero from './routes/Hero';
import UserProfile from './routes/UserProfile';
import PageNotFound from './components/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/user/:id",
    element: <UserProfile />
  },
  {
    path: "*",
    element: <PageNotFound />
  }
] , {basename : '/user-directory'});

function App() {


  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  )
}

export default App
