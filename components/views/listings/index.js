import { useState } from 'react';
import Default from './default';
import Explore from './explore-destinations/index';

function Listings() {
  const [view, setView] = useState('default');

  return (
    <div className="w-full h-full overflow-y-auto">
      {view === 'default' ? (
        <Default setView={setView} />
      ) : view === 'Explore your Destination' ? (
        <Explore setView={setView} />
      ) : (
        <Default setView={setView} />
      )}
    </div>
  );
}

export default Listings;
