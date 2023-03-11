import React from "react";
import { TypeAnimation } from "react-type-animation";
import {GrFacebookOption, GrInstagram, GrYoutube} from 'react-icons/gr'
import {FaTiktok} from 'react-icons/fa'

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Banner =()=>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.banner .title, .banner .animation, .banner .text', {x:"-200px", opacity:0}, {x:0, opacity:1, duration:.7, stagger:.2, ease:'easeInOut'});
        gsap.fromTo('.socials a', {y:"100px", opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2, delay:1})
    },[])

    const offers=()=>{
        const offer = document.querySelector('.offers');
        offer.scrollIntoView({behavior: "smooth"});
    }

    return(
    <div className=' header flex flex-col lg:container mx-auto lg:flex-row items-center my-[30px] font-mono w-[100%] h-screen'>
        <div className=' banner w-[80%] lg:w-[50%] text-center'>
        <h1 className='title text-[25px] sm:text-[40px] text-center font-orbitron'>Zespół Szkół Technicznych i Ogólnokształcacych</h1>
            <TypeAnimation
                sequence={[
                    'Dni otwarte',
                    2000,
                    '',
                    100
                ]}
                repeat={Infinity}
                className='text-[60px] text-red-800 text-center w-full animation'
            />
            <p className=' text-[20px] text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur molestias tempore omnis. Sed cumque totam ipsam fuga in fugit!
            </p>
            <h1 onClick={offers} className="text-[30px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-pink-600 cursor-pointer p-[10px]">Oferta na rok 2023/2024</h1>
            <div className='flex flex-col justify-center mx-auto lg:flex-row'>
            <div className='socials flex text-[30px] my-[20px] '>
                <a href="https://www.facebook.com/ZSTiOBANACH/?locale=pl_PL"><GrFacebookOption className='hover:text-red-900 transition-all duration-300 mx-[10px]'/></a>
                <a href="https://www.instagram.com/zstio.fm/"><GrInstagram className='hover:text-red-900 transition-all duration-300 mx-[10px]'/></a>
                <a href="https://www.youtube.com/@zstio_fm"><GrYoutube className='hover:text-red-900 transition-all duration-300 mx-[10px]'/></a>
                <a href="https://www.tiktok.com/@zstio.fm"><FaTiktok className='hover:text-red-900 transition-all duration-300 mx-[10px]'/></a>
            </div>
            <button className=' font-gruppo font-extrabold text-[20px] border-[2px] border-[crimson] text-[crimson] px-[25px] h-[50px] mt-[10px] rounded-[30px] max-w-[210px] mb-[20px] hover:bg-[crimson] hover:text-black transition-all duration-300'>Przejdź do quizu</button>
            </div>
        </div>
        {/* <img src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGMlMjBzZXR1cHxlbnwwfHwwfHw%3D&w=1000&q=80" className='bannerImg w-[90%] max-w-[600px] rounded-full mx-auto'/> */}
    </div>    
    )
}

export default Banner;