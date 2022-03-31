import Head from 'next/head';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Amplify, Auth } from "aws-amplify";
import config from '../aws-exports'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import '../styles/globals.css';

Amplify.configure(config)
const formFields = {
  signUp: {
    email: {
      order:1
    },
    name: {
      placeholder: 'First Name',
      type: 'name',
      order: 2

    },
    family_name: {
      placeholder: 'Last Name',
      isRequired: true,
      type: 'family_name',
      order: 3,
    },
    password: {
      order: 4,

    },
  }
}
function MyApp({ Component, pageProps }) {
  return (
    
    
    <Authenticator formFields={formFields}>
      {({ signOut, user }) => (
    <div>
      {/* 17.54 find passing the logout props */}
  
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <ResponsiveAppBar  user={user} signOut = {signOut} />
      <Component {...pageProps} />
      </div>
      )}
      </Authenticator>
  );
}

export default MyApp;

//Authenticator  27:34