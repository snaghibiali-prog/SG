import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from './authClient';

export default function AuthGate({ children }) {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
}
