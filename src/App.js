import './App.css';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Home from './pages/Home';
import Quote from './pages/quote/Quote';
import Calculator from './pages/calculator/calculator';

// https://api.api-ninjas.com/v1/quotes?category

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Route>,
  ),
);
function App() {
  return (
    <div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
