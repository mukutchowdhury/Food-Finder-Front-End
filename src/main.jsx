import ReactDOM from 'react-dom/client';
//import HomeView from './views/home'
//import SignUpView from './views/signupStyle'
//import Review from './Components/Review.jsx'
import App from './App.jsx';
import RestaurantView from './views/restaurantView.jsx';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route index element={<App />} />
      {/* /*
      <Route path='/Home' element={<HomeView/>}/>
      <Route path='/Login' element={<LoginView/>}/>
      
      */ 
      <Route path='/RestaurantView' element={<RestaurantView/>}/>
      }


      
      
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
