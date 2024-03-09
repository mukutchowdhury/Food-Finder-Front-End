import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import HomeView from './views/home'
import LoginForm from './views/LoginForm.jsx'
import AuthForm from './views/AuthForm.jsx'
import Review from './Components/Review.jsx'
//import RestaurantRegistrationView from './views/restaurantregistration.jsx'
import RestaurantView from './views/restaurantView.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route index element={<App />} />
      <Route path='/restaurant/:id' element={<RestaurantView />} />
      <Route path='/review/:id' element={<Review />} />
      <Route path='/signup' element={<AuthForm />} />
      <Route path='/signin' element={<LoginForm />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
