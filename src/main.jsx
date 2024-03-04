import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import HomeView from './views/home'
//import LoginView from './views/login'
//import SignUpView from './views/signupStyle'
//import Review from './Components/Review.jsx'
//import RestaurantRegistrationView from './views/restaurantregistration.jsx'
import RestaurantView from './views/restaurantView.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route index element={<App />} />
      <Route path='/restaurant/:id' element={<RestaurantView />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
