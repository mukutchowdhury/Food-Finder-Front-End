import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AccessDenied from './views/Access-Denied.jsx';
import AuthForm from './views/AuthForm.jsx';
import LoginForm from './views/LoginForm.jsx';
import VendorForm from './views/VendorForm.jsx';
import CategoryAll from './views/categoryAll.jsx';
import Settings from './views/developer-settings.jsx';
import HomeView from './views/home';
import RestaurantView from './views/restaurantView.jsx';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route index element={<HomeView />} />
      <Route path='/home' element={<App/>}/>
      <Route path='/signin' element={<LoginForm/>}/> 
      <Route path='/signup' element={<AuthForm/>}/> 
      <Route path='/RestaurantView' element={<RestaurantView/>}/>
      <Route path='/category/:name' element={<CategoryAll/>}/>
      <Route path='/dev-settings' element={<Settings/>}/>
      <Route path="/dev-settings/*" element={<Settings />} />
      <Route path='/restaurant/:id' element={<RestaurantView/>}/>
      <Route path='access-denied' element={<AccessDenied/>}/>
      <Route path = 'vendorform' element = {<VendorForm/>}/>
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
