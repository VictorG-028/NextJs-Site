import Head from 'next/head'
import Layout from '../components/Layout'

function GetHead() {
  return (
    <Head>
      <title>ANIMEFLIX</title>
    </Head>
  );
}


function GetBody() {
  return (
    <>
      <div>
        <h1>Hello, World!</h1>
      </div>
    </>
  );
}


export default function Page() {
  return (
    <Layout home={true}>
      <GetHead></GetHead>
      <GetBody></GetBody>
    </Layout>
  );
}
