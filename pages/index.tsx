import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from './layout/Navbar';
import Hero from './section/Hero';
import About from './section/about';
import Blockquote from './section/blockquote';
import Whatido from './section/whatido';
import Gallery from './section/gallery';
import Resume from './section/resume';
import Counter from './section/counter';
import Blog from './section/blog';
import Contact from './section/contact';
import Footer from './section/footer';
import ScrollToTopBtn from './layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="./img/background/1.jpg";

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;

export default function Home() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 3000)
      }
    }, []);
  return (
    <>
    <Head>
      <title>||AAKASH-PORTFOLIO||</title>
    </Head>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <div className='preloader fadeOut'>
        <div className="mainpreloader">
          <span></span>
        </div>
      </div>
    </div>

    {/* MENU */}
    <div className="home">
      
      <Navbar />

      {/* HERO */}
      <section id="hero-area" className="bg-bottom py-0">
        <Parallax bgImage={image1} strength={300}>
        <Hero/>
        <Link smooth spy to="about">
          <span className="mouse transition" id="fly">
              <span className="scroll"></span>
          </span>
        </Link>
        </Parallax>
      </section>

      {/* ABOUT */}
      <section id="about" className="pb-0">
        <About/>
        <Blockquote/>
      </section>

      {/* What I DO */}
      <section id="whatido">
        <Whatido/>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery/>
      </section>

      {/* Resume */}
      <section id="resume" className="pb-0">
        <Resume/>
        <Counter/>
      </section>

      {/* Blog */}
      {/* <section id="blog" className="pb-0">
        <Blog/>
      </section> */}

      {/* contact */}
      <section id="contact" className="pb-0">
        <Contact/>
        <Footer/>
      </section>

      <div className="float-text">
          <div className="de_social-icons">
              <a href="https://www.facebook.com/aakash.malik.27"><span className="buton"><i className="fa fa-facebook fa-lg"></i></span></a>
              <a href="https://www.linkedin.com/in/aakash-malik-676688314"><span className="buton"><i className="fa fa-linkedin fa-lg"></i></span></a>
              <a href="https://www.instagram.com/its_aakash3"><span className="buton"><i className="fa fa-instagram fa-lg"></i></span></a>
          </div>
          <span>Follow Me</span>
      </div>
    </div>
    <ScrollToTopBtn />
    </>
  )
}
