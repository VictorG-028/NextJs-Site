import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

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
			{/* <script src="https://kit.fontawesome.com/e06e0a7644.js" crossOrigin="anonymous"></script>
			<script src="/js/owl/jquery.min.js"></script>
			<script src="/js/owl/owl.carousel.min.js"></script>
			<script src="/js/owl/setup.js"></script>
			<script src="/js/Utils.js"></script>
			<script src="/js/index.js"></script>
			<script src="/js/header.js"></script> */}
		</>
	);
}


export default function Page() {
	const images = ['/images/10.jpg', '/images/m1.jpg', 
	'/images/m2.jpg', , '/images/m3.jpg', '/images/m4.jpg', 
	'/images/m5.jpg', '/images/m6.jpg', '/images/m7.jpg', 
	'/images/m8.jpg', '/images/m9.jpg', '/images/m10.jpg']
	
	return (
		<Layout home={true}>
			<GetHead></GetHead>
			<GetBody></GetBody>
			<Carousel images={images} title="Animes mais populares:"></Carousel>
		</Layout>
	);
}
