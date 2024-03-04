import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import HomeView from './views/home'
//import LoginView from './views/login'
//import SignUpView from './views/signupStyle'
// import Review from './Components/Review.jsx'
import RestView from './views/restaurantView.jsx'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route index element={<App />} />
      {/* <Route path='/home' element={<HomeView />} /> */}
      {/* <Route path='/review/:id' element={<Review />} /> */}
      <Route path='/rest' element={<RestView />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
