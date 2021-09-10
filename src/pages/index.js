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
	const images = ['/images/age/10.jpg', '/images/cover/m1.jpg', 
	'/images/cover/m2.jpg', , '/images/cover/m3.jpg', '/images/cover/m4.jpg', 
	'/images/cover/m5.jpg', '/images/cover/m6.jpg', '/images/cover/m7.jpg', 
	'/images/cover/m8.jpg', '/images/cover/m9.jpg', '/images/cover/m10.jpg']
	
	return (
		<Layout home={true}>
			<GetHead></GetHead>
			<GetBody></GetBody>
			<Carousel images={images} title="Animes mais populares:"></Carousel>
		</Layout>
	);
}
