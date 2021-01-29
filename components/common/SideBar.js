import {
  Avatar,
  BoxIcon,
  HeartIcon,
  HomeIcon,
  NotificationsIcon,
  PowerIcon,
  UserIcon,
  WrenchIcon,
} from 'evergreen-ui';
import { useContext } from 'react';
import Context from '../../store/context';

function SideBar() {
  const { state, actions } = useContext(Context);

  const { user, page } = state;
  return (
    <div className="absolute left-0 h-screen w-72 px-5 pt-10 bg-gray-100">
      <div className="flex items-center mb-10">
        <Avatar
          isSolid
          src={user?.profile?.picture}
          name={user?.profile?.firstname + ' ' + user?.profile?.lastname}
          size={40}
          className="mr-2"
        />
        <p className="text-lg font-semibold">Hey {user?.profile?.firstname}</p>
      </div>
      <ul className="list-none">
        <li
          className={`px-5 py-4 font-semibold flex items-center hover:bg-yellow-200 cursor-pointer mb-2 ${
            page === 1 && 'bg-yellow-100 text-primary'
          }`}
          onClick={() => {
            actions({ type: 'setPage', payload: 1 });
          }}
        >
          <HomeIcon className="mr-2" />
          My Listsings
        </li>
        <li
          className={`px-5 py-4 font-semibold flex items-center hover:bg-yellow-200 cursor-pointer mb-2 ${
            page === 2 && 'bg-yellow-100 text-primary'
          }`}
          onClick={() => {
            actions({ type: 'setPage', payload: 2 });
          }}
        >
          <HeartIcon className="mr-2" />
          Accomodation Interest
        </li>
        <li
          className={`px-5 py-4 font-semibold flex items-center hover:bg-yellow-200 cursor-pointer mb-2 ${
            page === 3 && 'bg-yellow-100 text-primary'
          }`}
          onClick={() => {
            actions({ type: 'setPage', payload: 3 });
          }}
        >
          <BoxIcon className="mr-2" />
          Transactions
        </li>
        <li
          className={`px-5 py-4 font-semibold flex items-center hover:bg-yellow-200 cursor-pointer mb-2 ${
            page === 4 && 'bg-yellow-100 text-primary'
          }`}
          onClick={() => {
            actions({ type: 'setPage', payload: 4 });
          }}
        >
          <UserIcon className="mr-2" />
          Profile
        </li>
        <li
          className={`px-5 py-4 font-semibold flex items-center hover:bg-yellow-200 cursor-pointer mb-2 ${
            page === 5 && 'bg-yellow-100 text-primary'
          }`}
          onClick={() => {
            actions({ type: 'setPage', payload: 5 });
          }}
        >
          <WrenchIcon className="mr-2" />
          Settings
        </li>
        <li
          className={`px-5 py-4 font-semibold flex items-center hover:bg-yellow-200 cursor-pointer mb-2 ${
            page === 6 && 'bg-yellow-100 text-primary'
          }`}
          onClick={() => {
            actions({ type: 'setPage', payload: 6 });
          }}
        >
          <NotificationsIcon className="mr-2" />
          Notifications
        </li>
        <li
          className={`px-5 py-4 font-semibold flex items-center hover:bg-yellow-200 cursor-pointer mb-2 ${
            page === 7 && 'bg-yellow-100 text-primary'
          }`}
          onClick={() => {
            actions({ type: 'logout' });
          }}
        >
          <PowerIcon className="mr-2" />
          Logout
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
