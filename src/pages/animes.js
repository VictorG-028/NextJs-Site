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
    
    </>
  );
}


export default function AnimesPage() {
  return (
    <Layout home={false}>
      <GetHead></GetHead>
      <GetBody></GetBody>
    </Layout>
  );
}
