import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { UserProvider, useUser } from './components/UserContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={
            // <ProtectedRoute>
              <Home />
            // </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
