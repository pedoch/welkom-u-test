import { useState } from 'react';

function useExploreState() {
  const [state, setState] = useState({
    universities: [],
    universitiesLoading: true,
  });

  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case 'setUniversities':
        return setState({ ...state, universities: payload, universitiesLoading: false });
      case 'setUniversitiesLoading':
        return setState({ ...state, universitiesLoading: payload });
      default:
        return state;
    }
  };

  return { state, actions };
}

export default useExploreState;
