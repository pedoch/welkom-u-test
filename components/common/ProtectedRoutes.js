import { Spinner } from 'evergreen-ui';
import { useContext, useEffect, useState } from 'react';
import Context from '../../store/context';

function ProtectedRoutes({ children }) {
  const { state, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) window.location.replace('/login?loggedIn=false');
    else {
      setLoading(false);
      actions({ type: 'login', payload: user });
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Spinner size={50} />
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default ProtectedRoutes;
