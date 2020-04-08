import Link from 'next/link';
import Layout from '../components/Layout';
import './index.scss';

import Head from 'next/head';

const Index = () => (
  <>
    <Head>
      <title>My main page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex, follow" />

      {/* <link rel="stylesheet" href="/css/index.css" /> */}
    </Head>
    <Layout>
      {/* <title>To my homepage</title> */}
      <h1 className="h1welcome">welcome</h1>
      <div className="box">halo</div>
    </Layout>
  </>
);

export default Index;
