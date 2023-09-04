import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';

const Autenticacion = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {children}
    </>
  );
};

export default Autenticacion;
