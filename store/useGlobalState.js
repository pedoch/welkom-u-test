import { useState } from 'react';

function useGlobalState() {
  const [state, setState] = useState({
    page: 1,
    user: null,
    isLoggedIn: false,
  });

  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case 'setPage':
        return setState({ ...state, page: payload });
      case 'setUser':
        return setState({ ...state, user: payload });
      case 'login':
        return setState({ ...state, user: payload, isLoggedIn: true });
      case 'logout':
        localStorage.removeItem('user');
        return window.location.replace('/login');
      default:
        return state;
    }
  };

  return { state, actions };
}

export default useGlobalState;
