import Head from 'next/head';
import { Amplify, Auth } from 'aws-amplify'
import config from '../aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '../styles/globals.css';

Amplify.configure(config)

function MyApp({ Component, pageProps }) {
  return (
   <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
