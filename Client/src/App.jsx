// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import CreateProfile from './components/CreateProfile';
import ProfilesList from './components/ProfilesList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profiles',
    element: (
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreateProfile />
        <ProfilesList />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;