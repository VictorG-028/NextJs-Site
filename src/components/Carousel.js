import Image from 'next/image'
import { Component } from 'react';
import styles from '../styles/carousel.module.css'

// ({ images, title })
export default class Carousel extends Component {

  mountAnimePopup(num) {
    console.log("Mount anime popup " + num);
  }

  render() {
    const itemSize = 240, marginRight = 10;
    const totalWidth = this.props.images.length * (itemSize + marginRight);
    return (
      
      <div className={styles.carouselContainer}>
        <h2>{this.props.title}</h2>

        <div className={styles.carouselOuter}>
          <div className={styles.carousel} style={{width: totalWidth + 'px'}}>
            {this.props.images.map( (image, index) => {
              return(
                <div className={styles.item} key={index}>
                  <Image 
                    className={styles.cover} 
                    src={image} 
                    alt="Cover image" 
                    onClick={() => this.mountAnimePopup(image)}
                    width={240}
                    height={144}
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    );
  };
  
}
