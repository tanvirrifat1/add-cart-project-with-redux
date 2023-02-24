import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { router } from './Components/Router/Router';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
