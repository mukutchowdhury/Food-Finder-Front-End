import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
//import HomeView from './views/home'
=======
import HomeView from './views/home'
//import LoginView from './views/login'
>>>>>>> 62bce6a95c791206c28e791896652ddbf867a721
//import SignUpView from './views/signupStyle'
import Review from './Components/Review.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import LoginView from './views/login.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route index element={<App />} />
      <Route path='/home' element={<HomeView />} />
      <Route path='/review/:id' element={<Review />} />
      <Route path='/Login' element={<LoginView />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
