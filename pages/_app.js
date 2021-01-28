import Context from '../store/context';
import useGlobalState from '../store/useGlobalState';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const store = useGlobalState();

  return (
    <Context.Provider value={store}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
