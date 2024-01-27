import {createBrowserRouter} from 'react-router-dom'
import UserHome from './components/UserPage/UserHome';
import LoginIn from './components/AdminPage/LoginIn';
import AdminHome from './components/AdminPage/AdminHome';

const router = createBrowserRouter([
    {
      path: '/',
      element: <UserHome />,
      errorElement: <div>error 404</div>
  
    },
    {
      path: '/admin',
      element: <LoginIn />,
      errorElement: <div>error Admin</div>,
      // children: [
      //   {
      //     path: '',
      //     element: <div>empty</div>,
      //   },
      //   {
      //     path: 'services',
      //     element: <div>services</div>,
      //     errorElement: <div>error contant not found</div>
      //   },
      //   {
      //     path: 'meeting',
      //     element: <div>meeting</div>,
      //     errorElement: <div>error contant not found</div>
      //   }
      // ]
    },
    {
      path: '/logIn',
      element: <AdminHome />,
      errorElement: <div>error 404</div>
  
    }
  ])

  export default router;