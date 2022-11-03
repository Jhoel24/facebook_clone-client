import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import './style.scss'
import useDarkMode from "./hooks/useDarkMode";
import useAuth from "./hooks/useAuth";

function App() {

  const { currentUser } = useAuth()

  const router = createBrowserRouter([
    {
      path: '/',
      element:
         <ProtectedRoute
          currentUser={currentUser}
         >
            <Layout />
          </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
