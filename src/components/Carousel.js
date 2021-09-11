import Image from 'next/image'
import { Component, useState } from 'react';
import styles from '../styles/carousel.module.css'


// ({ images, title })
export default function Carousel({ images, title }) {

  const itemWidth = 240, marginRight = 10;
  const totalWidth = images.length * (itemWidth + marginRight);
  const totalWidthA = 1000;
  const [counter, setCounter] = useState(0);

  function mountAnimePopup(num) {
    console.log("Mount anime popup " + num);
  }

  function shiftRight() {
    // TODO: Update style da forma correta
    // https://stackoverflow.com/questions/33593478/how-to-change-the-style-of-an-element-in-react
    if (-1*counter === images.length-2) return;

    const newCounter = counter -1;
    setCounter(newCounter);
    
    const caroussel = document.getElementsByClassName(styles.carousel);
    caroussel[0].style.transform = `translate3d(${newCounter*(itemWidth+marginRight)}px,0,0)`;
  }

  function shiftLeft() {
    if (counter === 0) return;

    const newCounter = counter +1;
    setCounter(newCounter);
    
    const caroussel = document.getElementsByClassName(styles.carousel);
    caroussel[0].style.transform = `translate3d(${newCounter*(itemWidth+marginRight)}px,0,0)`;
  }

  return (
    
    <div className={styles.carouselContainer}>
      <h2>{title}</h2>

      <div className={styles.carouselOuter}>
        <div className={styles.carousel} style={{width: totalWidth + 'px'}}>
          {images.map( (image, index) => {
            return(
              <div className={styles.item} key={index}>
                <Image 
                  className={styles.cover} 
                  src={image} 
                  alt="Cover image" 
                  onClick={() => mountAnimePopup(image)}
                  width={240}
                  height={360}
                ></Image>
              </div>
            );
          })}
        </div>

        <div className={styles.leftArrow} onClick={shiftLeft}>
          <p className={styles.centerTxt}>&larr;</p>
        </div>
        <div className={styles.rightArrow} onClick={shiftRight}>
          <p className={styles.centerTxt}>&rarr;</p>
        </div>

      </div>

    </div>

  );
  
}
