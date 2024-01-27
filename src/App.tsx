import './App.css'
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { routes } from './routes';

function App() {

  return (
    <div>
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  )
}

export default App
