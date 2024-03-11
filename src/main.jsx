<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
//import HomeView from './views/home'
//import SignUpView from './views/signupStyle'
//import Review from './Components/Review.jsx'
import App from './App.jsx';
import RestaurantRegistrationView from './views/restaurantregistration.jsx';
=======
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import HomeView from './views/home'
import LoginForm from './views/LoginForm.jsx'
import AuthForm from './views/AuthForm.jsx'
import Review from './Components/Review.jsx'
//import RestaurantRegistrationView from './views/restaurantregistration.jsx'
import RestaurantView from './views/restaurantView.jsx'
>>>>>>> 44d39b2b8e6ebe31fccda3d2227715a0ac06a845

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route index element={<App />} />
<<<<<<< HEAD
      {/* /*
      <Route path='/Home' element={<HomeView/>}/>
      <Route path='/Login' element={<LoginView/>}/>
      */ }

      <Route path='/restaurantregistration' element={<RestaurantRegistrationView/>}/>

      
      
=======
      <Route path='/restaurant/:id' element={<RestaurantView />} />
      <Route path='/review/:id' element={<Review />} />
      <Route path='/signup' element={<AuthForm />} />
      <Route path='/signin' element={<LoginForm />} />
>>>>>>> 44d39b2b8e6ebe31fccda3d2227715a0ac06a845
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
