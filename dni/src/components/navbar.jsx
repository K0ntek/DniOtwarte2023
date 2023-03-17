import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar =()=>{
    useEffect(()=>{
        gsap.fromTo('.navbar', {y:'-100%'}, {y:0, duration:.4, ease: "ease-in-out", delay:.2})
    },[])
    const Navigation=[
        {
            title: 'STRONA GŁÓWNA',
            link: '/'
        },
        {
            title: 'WIRTUALNY SPACER PO SZKOLE',
            link: 'https://app.lapentor.com/sphere/spacer-2021?scene=619b985098d38917c05e70e5'
        },
        {
            title: 'QUIZ',
            link: '/QUIZ'
        },
    ]
    return(
        <nav className='navbar w-[100%] bg-red-800 text-white fixed top-0 font-gruppo text-[20px] h-[60px] z-50'>
            <ul className='flex justify-center'>
                {Navigation.map((element, key)=>{
                    return(
                        <li index={key} className='mx-[30px] my-[15px]'><Link to={element.link} className='px-[20px] py-[10px]'>{element.title}</Link></li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;