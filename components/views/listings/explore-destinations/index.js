import { useContext, useEffect, useState } from 'react';
// import Context from '../../../../store/exploreContext';
// import useExploreState from '../../../../store/useExploreState';
import Context from '../../../../store/context';
import ExploreDefault from './default';
import Universities from './universities';

function ExploreDestinations({ setView }) {
  const [exploreView, setExploreView] = useState('default');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  const {
    state: { user },
    action,
  } = useContext(Context);

  -useEffect(() => {
    setProvince(user?.profile?.immigrationInformation?.province);
    setCity(user?.profile?.immigrationInformation?.city);
  }, []);

  // const exploreStore = useExploreState();

  return (
    <div>
      {exploreView === 'default' ? (
        <ExploreDefault
          setView={setView}
          setExploreView={setExploreView}
          province={province}
          city={city}
          setProvince={setProvince}
          setCity={setCity}
        />
      ) : exploreView === 'universities' ? (
        <Universities setExploreView={setExploreView} province={province} city={city} />
      ) : (
        <ExploreDefault
          setView={setView}
          setExploreView={setExploreView}
          province={province}
          city={city}
          setProvince={setProvince}
          setCity={setCity}
        />
      )}
    </div>
  );
}

export default ExploreDestinations;
