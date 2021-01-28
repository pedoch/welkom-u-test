import Head from 'next/head';
import { useContext } from 'react';
import AppLayout from '../components/common/AppLayout';
import ProtectedRoutes from '../components/common/ProtectedRoutes';
import Listings from '../components/views/listings/index';
import Profile from '../components/views/profile/index';
import Context from '../store/context';

export default function Home() {
  const {
    state: { page },
    actions,
  } = useContext(Context);
  return (
    <ProtectedRoutes>
      <AppLayout>
        <Head>
          <title>Home | Welkom U</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>

        <div className="w-full h-screen overflow-hidden">
          {page === 1 ? <Listings /> : page === 4 ? <Profile /> : <Listings />}
        </div>
      </AppLayout>
    </ProtectedRoutes>
  );
}
