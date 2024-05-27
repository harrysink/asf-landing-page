import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import saraLogo from '../assets/wema.png'
import hero from '../assets/hero-2-1.jpg'
import './Hero.css'

export const Hero = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 900,
          easing: "ease-out-cubic",
        });
    }, []);

  return (
    <div style={{ display: 'block', height: '700px', position: 'relative'}}> 
      <Carousel className='carousel carousel-fade'> 
        <Carousel.Item interval={50000} className='carousel-item'> 
          <div className='hero-img-div'>
            <img 
                className="hero" 
                src={hero}
                alt="Image One"
            /> 
          </div>
          <Carousel.Caption className='top-0 mt-5 pt-0 d-md-block' data-aos="fade-up"> 
            <h3 className='text-start display-2 mt-5'>TRANSITIONING INTO TECH FOR WOMEN</h3> 
            <p className='text-start fw-bolder mt-3 mb-4'>in partnership with</p> 
            <img src={saraLogo} alt="" className='sara mb-4' />
            <p className='text-start fw-medium mt-1 mb-3'>Backend Development • Frontend Development • <br></br>
                Data Analysis • DevOps • Tech Enterpreneurship • <br></br>Tech Marketing • Soft Skills • Advanced 
                Learning
            </p> 
            <div className='button-div flex justify-left'>
                <button className="btn btn-danger fw-medium justify-left px-3 py-2 mt-3">explore courses</button>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 

        <Carousel.Item interval={50000}> 
          <img 
            className="hero"
            src={hero}
            alt="Image Two"
          /> 
          <Carousel.Caption className='top-0 mt-5 pt-0 d-md-block'> 
            <h3 className='text-start display-2 mt-5'>STORIES IN PICTURES</h3> 
            <p className='text-start fw-bolder mt-3 mb-4'>Relive the official lauch on Dec 19, 2023</p> 
            <div className='button-div flex justify-left'>
                <button className="btn btn-danger fw-medium justify-left px-3 py-2 mt-3">explore courses</button>
            </div>
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
  );
};

/* <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                    <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
        )}
    >
      <div className="h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel> */