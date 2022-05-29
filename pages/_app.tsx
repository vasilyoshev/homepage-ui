import '../styles/global.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      From _app.tsx file
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
