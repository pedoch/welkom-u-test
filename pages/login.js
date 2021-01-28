import axios from 'axios';
import { Spinner } from 'evergreen-ui';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Context from '../store/context';

function Login() {
  const { state, actions } = useContext(Context);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.query.loggedIn && router.query.loggedIn === 'false') setLoading(false);
    else if (localStorage.getItem('user')) window.location.replace('/');
    else setLoading(false);
  });

  const onSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const { data } = await axios.post(
        'https://api.welkom-u.ca/WelkomU_Test/api/ProfileManagement/LoginUser',
        {
          email,
          password,
        },
      );

      console.log(data);

      if (data.result.responseCode === '00') {
        localStorage.setItem('user', JSON.stringify(data.result.userProfile));
        actions({ type: 'login', payload: data.result.userProfile });
        setSubmitting(false);
        window.location.replace('/');
      } else {
        setError(data.result.responseDescription);
        setSubmitting(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="h-full min-h-screen w-full">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Spinner size={50} />
        </div>
      ) : (
        <div className="w-full h-full min-h-screen grid grid-cols-3">
          <Head>
            <title>Log In | Welkom U</title>
          </Head>
          <div className="col-span-1 h-full bg-primary flex justify-center align-center px-5 smallTablet:hidden">
            <div className="">
              <img src="/images/welkom-logo.png" className="mb-20 mt-10" />
              <p className="text-5xl font-bold max-w-md text-white opacity-70">
                Start the life, career you desire with ease.
              </p>
            </div>
          </div>
          <div className="col-span-2 h-full flex justify-center align-center bg-blue-50 px-5 py-16 smallTablet:col-span-3">
            <form
              className="mx-auto my-auto w-full max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <p className="text-red-500">{error}</p>
              <div className="flex flex-col mx-auto mb-10">
                <label className="ml-5 p-2 bg-blue-50 -mb-5 z-10 w-min whitespace-nowrap text-grey-500">
                  Email address
                </label>
                <input
                  className="border-2 border-grey-500 bg-blue-50 p-5 w-full rounded-lg"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col mx-auto mb-5">
                <label className="ml-5 p-2 bg-blue-50 -mb-5 z-10 w-min whitespace-nowrap text-grey-500">
                  Password
                </label>
                <input
                  className="border-2 border-grey-500 bg-blue-50 p-5 w-full rounded-lg"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="text-primary mb-10 text-lg">Forgot password?</p>
              <button
                className="w-full flex justify-between bg-primary rounded p-5 mb-10 text-white text-lg"
                disabled={submitting}
                type="submit"
              >
                <span className="font-semibold">{submitting ? 'Logging In...' : 'Sign In'}</span>
                <span className="font-bold">&gt;</span>
              </button>
              <p className="text-lg">
                Don't have and account?{' '}
                <a href="/#" className="ml-1 text-primary">
                  Sign up now
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
