import { Avatar } from 'evergreen-ui';
import { useContext, useEffect, useState } from 'react';
import Context from '../../../store/context';

function ProfileIndex() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');

  const {
    state: { user },
    state,
    actions,
  } = useContext(Context);

  useEffect(() => {
    setFirstname(user?.profile?.firstname);
    setLastname(user?.profile?.lastname);
    setEmail(user?.emailAddress);
    setDob(user?.profile?.dob);
    setPhoneNumber(user?.profile?.phoneNumber);
    setGender(user?.profile?.gender);
    setNationality(user?.profile?.nationality);
    setCountryOfResidence(user?.profile?.countryOfResidence);
  }, []);
  return (
    <div className="w-full h-full overflow-y-auto px-10">
      <div className="w-full max-w-7xl mx-auto mt-10 flex flex-col">
        <p className="text-xl font-semibold mb-5">Profile</p>
        <Avatar
          isSolid
          src={user?.profile?.picture}
          name={user?.profile?.firstname + ' ' + user?.profile?.lastname}
          size={150}
          className="mx-auto mt-10 mb-3"
        />
        <button className="p-2 bg-primary mx-auto mb-10 text-sm" disabled>
          Upload Image
        </button>
        <form className="w-full max-w-4xl mx-auto">
          <div className="flex space-x-5">
            <div className="flex flex-col mb-5 w-full">
              <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                First Name
              </label>
              <input
                className="border-2 border-grey-500 p-4 w-full rounded-lg"
                disabled
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5 w-full">
              <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                Last Name
              </label>
              <input
                className="border-2 border-grey-500 p-4 w-full rounded-lg"
                disabled
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="flex flex-col mb-5 w-full">
              <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                Email
              </label>
              <input
                className="border-2 border-grey-500 p-4 w-full rounded-lg"
                disabled
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5 w-full">
              <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                Date of Birth
              </label>
              <input
                className="border-2 border-grey-500 p-4 w-full rounded-lg"
                disabled
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="flex flex-col mb-5 w-full">
              <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                Phone Number
              </label>
              <input
                className="border-2 border-grey-500 p-4 w-full rounded-lg"
                disabled
                type="number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5 w-full">
              <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                Gender
              </label>
              <select
                className="border-2 border-grey-500 p-4 w-full rounded-lg"
                disabled
                type="select"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value={0}>Male</option>
                <option value={1}>Male</option>
                <option value={2}>Other</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="flex flex-col mb-5 w-full">
              <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                Nationality
              </label>
              <select
                className="border-2 border-grey-500 p-4 w-full rounded-lg"
                disabled
                type="select"
                required
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option value="Andorran">Andorran</option>
                <option value="Nigerian">Nigerian</option>
                <option value="Canadian">Canadian</option>
              </select>
            </div>
            <div className="flex flex-col mb-5 w-full">
              <label className="ml-5 p-2 -mb-5 z-10 w-min whitespace-nowrap text-grey-500 bg-white">
                Country of Residence
              </label>
              <select
                className="border-2 border-grey-500 p-4 w-full rounded-lg"
                disabled
                type="select"
                required
                value={countryOfResidence}
                onChange={(e) => setCountryOfResidence(e.target.value)}
              >
                <option value="Andorra">Andorra</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>
          <button
            className="w-full flex justify-center bg-primary rounded p-5 mb-10 text-white"
            disabled
            type="submit"
          >
            <p className="font-semibold">Save</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileIndex;
