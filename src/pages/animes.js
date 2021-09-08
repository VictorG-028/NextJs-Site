import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


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
    <>
      <GetHead></GetHead>
      <GetBody></GetBody>
    </>
  );
}
