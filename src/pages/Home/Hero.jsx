import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hero1 from '../../assets/banner/banner1.png'
import hero2 from '../../assets/banner/banner2.png'
import hero3 from '../../assets/banner/banner3.png'

const Hero = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src={hero1} />
                </div>
                <div>
                    <img src={hero2} />
                </div>
                <div>
                    <img src={hero3} />
                </div>
            </Carousel>
    );
};

export default Hero;