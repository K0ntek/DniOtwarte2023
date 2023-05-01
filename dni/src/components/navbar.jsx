import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";


const Navbar =()=>{
    useEffect(()=>{
        gsap.fromTo('.navbar', {y:'-100%'}, {y:0, duration:.4, ease: "ease-in-out", delay:2})
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

    const [activeNavbar, setNavbar] = useState('navbar')
    const toggleNavbar =()=>{
        activeNavbar === 'navbar' ? setNavbar('navbar activeNavbar') : setNavbar('navbar');
    }

    const [activeIcon, setIcon] = useState('icon')

        const icon =()=>{
            activeIcon === 'icon' ? setIcon('icon activeIcon') : setIcon('icon');
        }


    return(
      <>
          <div className="w-[30px] fixed top-[1%] right-[1%] md:hidden" onClick={toggleNavbar}>
        <div className={activeIcon} onClick={icon}>
            <div className="line item-1 my-[6px]"></div>
            <div className="line item-2 my-[6px]"></div>
            <div className="line item-3 my-[6px]"></div>
        </div>
        </div>

        <nav className={`fixed top-[40px] md:top-0 left-[100%] md:left-0 bg-red-700 w-[80%] text-black font-orbitron md:w-full h-[100%] md:h-[60px] z-40 overflow-hidden ${activeNavbar}`}>
            <ul className='md:flex justify-center'>
                {Navigation.map((element, key)=>{
                    return(
                        <li index={key} className='mx-[30px] my-[15px]'><Link to={element.link} className='px-[20px] py-[10px] hover:text-[18px] hover:font-bold transition-all duration-200'>{element.title}</Link></li>
                    )
                })}
            </ul>
        </nav>
      </>
    )
}

export default Navbar;