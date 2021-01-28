import axios from 'axios';
import {
  AirplaneIcon,
  ControlIcon,
  CrownIcon,
  Dialog,
  FlameIcon,
  InfoSignIcon,
  ManualIcon,
  PeopleIcon,
} from 'evergreen-ui';
import { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import Context from '../../../../store/context';

function ExploreDefault({ setView, setExploreView, setProvince, setCity, city, province }) {
  const [isShown, setIsShown] = useState(false);
  const [holdProvince, setHoldProvince] = useState('');
  const [holdCity, setHoldCity] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingProvinces, setLoadingProvinces] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [cityMessage, setCityMessage] = useState('Select a province first');
  const [provinceMessage, setProvinceMessage] = useState('Select a province');

  const { state, actions } = useContext(Context);

  const { user } = state;

  useEffect(() => {
    getProvinces();
  }, []);

  const getProvinces = async () => {
    setLoadingProvinces(true);
    try {
      const { data } = await axios.get(
        'https://api.welkom-u.ca/WelkomU_Test/api/CityProvince/GetAllProvinces',
      );

      if (data.result.responseCode === '00') setProvinces(data.result.provinces);
    } catch (error) {
      setProvinceMessage('Could not load provinces');
    } finally {
      setLoadingProvinces(false);
    }
  };

  const getCities = async (provinceAsParam) => {
    setLoadingCities(true);
    try {
      const { data } = await axios.get(
        `https://api.welkom-u.ca/WelkomU_Test/api/CityProvince/GetAllCities?ProvinceName=${provinceAsParam}`,
      );

      if (data.result.responseCode === '00') setCities(data.result.cities);
    } catch (error) {
      setCityMessage('Could not load cities');
    } finally {
      setLoadingCities(false);
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full px-10">
      <p
        onClick={() => setView('default')}
        className="ml-2 font-semibold text-gray-400 mt-5 cursor-pointer"
      >
        &lt;&nbsp;Back
      </p>
      <div className="w-full max-w-7xl mx-auto mt-10">
        <p className="text-xl font-semibold mb-5">Explore Destinations</p>
        <Slider {...settings} className="text-black">
          <div className="mx-1">
            <img className="w-72 h-72" src="/images/city.jpg" />
          </div>
          <div className="mx-1">
            <img className="w-72 h-72" src="/images/canada.jpg" />
          </div>
          <div className="mx-1">
            <img className="w-72 h-72" src="/images/city.jpg" />
          </div>
          <div className="mx-1">
            <img className="w-72 h-72" src="/images/canada.jpg" />
          </div>
          <div className="mx-1">
            <img className="w-72 h-72" src="/images/city.jpg" />
          </div>
          <div className="mx-1">
            <img className="w-72 h-72" src="/images/canada.jpg" />
          </div>
        </Slider>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-10 flex justify-between">
        <div>
          <div className="mb-3">
            <p className="flex items-center text-xs text-gray-600 mb-2">
              MAIN DESTINATION <InfoSignIcon className="ml-1 w-1 h-1" />
            </p>
            <div className="w-full flex bg-blue-500 p-4 rounded text-sm text-white">
              <span className="mr-1">
                <img src="/images/canada.svg" className="w-7 h-5 mt-0" />
              </span>
              <div>
                <p className="font-semibold mb-2">
                  {user?.profile?.immigrationInformation?.destinationCountry}
                </p>
                <p className="uppercase">
                  {user?.profile?.immigrationInformation?.province},{' '}
                  {user?.profile?.immigrationInformation?.city}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="flex items-center text-xs text-gray-600 mb-2">
              OTHER DESTINATIONS <InfoSignIcon className="ml-1 w-1 h-1" />
            </p>
            <div className="w-full flex bg-gray-50 p-4 rounded text-sm text-gray-400 mb-3 border border-gray-100">
              <span className="mr-1">
                <img src="/images/australia.svg" className="w-7 h-5 mt-0" />
              </span>
              <div>
                <p className="font-semibold mb-2">Australia</p>
                <p className="opacity-0">Hehehehe </p>
              </div>
            </div>
            <div className="w-full flex bg-gray-50 p-4 rounded text-sm text-gray-400 mb-3 border border-gray-100">
              <span className="mr-1">
                <img src="/images/cyprus.svg" className="w-7 h-5 mt-0" />
              </span>
              <div>
                <p className="font-semibold mb-2">Cyprus</p>
                <p className="opacity-0">Hehehehe </p>
              </div>
            </div>
            <div className="w-full flex bg-gray-50 p-4 rounded text-sm text-gray-400 mb-3 border border-gray-100">
              <span className="mr-1">
                <img src="/images/united-states.svg" className="w-7 h-5 mt-0" />
              </span>
              <div>
                <p className="font-semibold mb-2">United States of America</p>
                <p className="opacity-0">Hehehehe </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-5">
            <div className="text-gray-400">
              <p className="text-md text-black font-semibold">
                {user?.profile?.immigrationInformation?.destinationCountry}
              </p>
              <p className="text-xs">Province: {province}</p>
              <p className="text-xs">City: {city}</p>
            </div>
            <Dialog
              isShown={isShown}
              title="Change Location"
              hasFooter={false}
              onCloseComplete={() => {
                setHoldCity('');
                setHoldProvince('');
                setIsShown(false);
              }}
            >
              <div className="flex flex-col mb-5 w-full">
                <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                  Province
                </label>
                <select
                  className="border-2 border-grey-500 p-4 w-full rounded-lg"
                  placeholder={provinceMessage}
                  required
                  value={holdProvince}
                  onChange={(e) => {
                    setHoldProvince(e.target.value);
                    getCities(e.target.value);
                  }}
                >
                  {provinces.map((prov, index) => {
                    return (
                      <option key={index} value={prov.name}>
                        {prov.name}
                      </option>
                    );
                  })}
                </select>
                <p>{loadingProvinces && 'Loading provinces...'}</p>
              </div>
              <div className="flex flex-col mb-5 w-full">
                <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                  City
                </label>
                <select
                  className="border-2 border-grey-500 p-4 w-full rounded-lg"
                  placeholder={cityMessage}
                  required
                  value={holdCity}
                  onChange={(e) => setHoldCity(e.target.value)}
                >
                  {cities.map((city, index) => {
                    return (
                      <option key={index} value={city.name}>
                        {city.name}
                      </option>
                    );
                  })}
                </select>
                <p>{loadingCities && 'Loading cities...'}</p>
              </div>
              <button
                className="w-full flex justify-center bg-primary rounded p-5 mb-10 text-white"
                type="submit"
                onClick={() => {
                  setCity(holdCity);
                  setProvince(holdProvince);
                  setIsShown(false);
                }}
              >
                <p className="font-semibold">Save</p>
              </button>
            </Dialog>
            <button
              className="border border-gray-200 text-xs px-2 py-1 ml-3"
              onClick={() => {
                setHoldCity(city);
                setHoldProvince(province);
                setIsShown(true);
              }}
            >
              Change Location
            </button>
          </div>
          <div
            className="w-full flex justify-between items-center shadow p-3 rounded text-sm text-gray-400 mb-3 border border-gray-100 cursor-pointer hover:bg-yellow-50"
            onClick={() => setExploreView('universities')}
          >
            <div className="flex items-center">
              <ControlIcon size={20} className="mr-4" />
              <div className="mr-2">
                <p className="font-semibold">Universities</p>
                <p className="">Explore your universities</p>
              </div>
            </div>
            <span>&gt;</span>
          </div>
          <div className="w-full flex justify-between items-center shadow p-3 rounded text-sm text-gray-400 mb-3 border border-gray-100 cursor-pointer hover:bg-yellow-50">
            <div className="flex items-center">
              <ManualIcon size={20} className="mr-4" />
              <div className="mr-2">
                <p className="font-semibold">Colleges</p>
                <p className="">Find top colleges</p>
              </div>
            </div>
            <span>&gt;</span>
          </div>
          <div className="w-full flex justify-between items-center shadow p-3 rounded text-sm text-gray-400 mb-3 border border-gray-100 cursor-pointer hover:bg-yellow-50">
            <div className="flex items-center">
              <PeopleIcon size={20} className="mr-4" />
              <div className="mr-2">
                <p className="font-semibold">First Friend</p>
                <p className="">Help on arrival</p>
              </div>
            </div>
            <span>&gt;</span>
          </div>
          <div className="w-full flex justify-between items-center shadow p-3 rounded text-sm text-gray-400 mb-3 border border-gray-100 cursor-pointer hover:bg-yellow-50">
            <div className="flex items-center">
              <AirplaneIcon size={20} className="mr-4" />
              <div className="mr-2">
                <p className="font-semibold">Airport Pickup</p>
                <p className="">Book a ride</p>
              </div>
            </div>
            <span>&gt;</span>
          </div>
          <div className="w-full flex justify-between items-center shadow p-3 rounded text-sm text-gray-400 mb-3 border border-gray-100 cursor-pointer hover:bg-yellow-50">
            <div className="flex items-center">
              <FlameIcon size={20} className="mr-4" />
              <div className="mr-2">
                <p className="font-semibold">Food</p>
                <p className="">Satisfy your taste buds</p>
              </div>
            </div>
            <span>&gt;</span>
          </div>
          <div className="w-full flex justify-between items-center shadow p-3 rounded text-sm text-gray-400 mb-3 border border-gray-100 cursor-pointer hover:bg-yellow-50">
            <div className="flex items-center">
              <CrownIcon size={20} className="mr-4" />
              <div className="mr-2">
                <p className="font-semibold">Top Activities</p>
                <p className="">Must do</p>
              </div>
            </div>
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreDefault;
