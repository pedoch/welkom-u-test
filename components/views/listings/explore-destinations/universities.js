import axios from 'axios';
import { Spinner } from 'evergreen-ui';
import { useContext, useEffect, useState } from 'react';
import Context from '../../../../store/context';

function Universities({ setExploreView, province, city }) {
  const [universities, setUniversities] = useState([]);
  const [universitiesLoading, setUniversitiesLoading] = useState(false);
  const [error, setError] = useState('Nothing to see here');

  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    setUniversitiesLoading(true);
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    setError('Nothing to see here...');
    try {
      const { data } = await axios.get(
        `https://api.welkom-u.ca/WelkomU_Test/api/UniversityManagement/GetAllUniversity?Province=${province}&City=${city}&PageSize=10&CurrentPage=1`,
      );
      console.log(data);
      if (data.responseCode === '00') setUniversities(data.universities.items);
    } catch (error) {
      setError('Unable to load university list...');
      console.log(error);
    } finally {
      setUniversitiesLoading(false);
    }
  };

  return (
    <div className="w-full px-10">
      <p
        onClick={() => setExploreView('default')}
        className="ml-2 font-semibold text-gray-400 mt-5 cursor-pointer"
      >
        &lt;&nbsp;Back
      </p>
      <div className="w-full mx-auto mt-10 max-w-5xl">
        <p className="text-xl font-semibold mb-5">Universities</p>
        {universitiesLoading ? (
          <span className="w-full flex justify-center">
            <Spinner size={40} />
          </span>
        ) : universities.length < 1 ? (
          <p>{error}</p>
        ) : (
          universities.map((uni, index) => {
            return (
              <div className="rounded p-5 grid grid-cols-3 h-auto w-full mb-5">
                <img className="col-span-1 rounded" src="/images/university.jpg" />
                <div className="ml-4 flex flex-col justify-between col-span-2">
                  <div>
                    <div
                      className="border border-gray-200 p-3 mb-5 flex w-full"
                      style={{ width: 'fit-content' }}
                    >
                      <img src={uni.image} className="w-20 mr-2" />
                      <div className="whitespace-nowrap">
                        <p className="text-sm">{uni.name}</p>
                        <p className="text-xs text-gray-400">Public University in {uni.city}</p>
                      </div>
                    </div>
                    <p className="font-bold">About</p>
                    <p className="mb-5 text-md text-gray-500 font-semibold">{uni.about}</p>
                  </div>
                  <a href={uni.url} target="_blanc" className="underline">
                    View more...
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Universities;
