import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/Login/Signup';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import WritePost from './pages/WritePost';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ForgotPassword from './pages/Login/ForgotPassword';
import Navbar from './pages/NavBar/Navbar';
import Footer from './pages/Footer/Footer';
import SinglePost from './pages/SinglePost';
import UserProfile from './UserProfile/UserProfile';
import EditUserProfile from './UserProfile/EditUserProfile';
import UsersPosts from './UserProfile/UsersPosts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
  {
    path: '/create-post',
    element: <WritePost />,
  },
  {
    path: `/post/:id`,
    element: <SinglePost />,
  },

  {
    path: `/users/:id`,
    element: <UserProfile />,
  },
  {
    path: `/edit-profile/:id`,
    element: <EditUserProfile />,
  },
  {
    path: `/users/posts/:id/`,
    element: <UsersPosts />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
