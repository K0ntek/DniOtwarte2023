import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    const Navigation=[
        {
            title: 'STRONA GŁÓWNA',
            link: '/'
        },
        {
            title: 'WIRTUALNY SPACER PO SZKOLE',
            link: 'https://app.lapentor.com/sphere/spacer-2021?scene=61783cd4a156fd7be93f1d62'
        },
        {
            title: 'QUIZ',
            link: ''
        },
    ]
    return(
        <nav className='w-[100%] bg-black text-white fixed top-0 font-gruppo text-[20px] h-[60px] z-50'>
            <ul className='flex justify-center'>
                {Navigation.map((element, key)=>{
                    return(
                        //<a href={element.link} className=' after:content-'><li index={key} className='px-[20px] py-[10px] mx-[30px] my-[10px]'>{element.title}</li></a>
                        <li index={key} className='mx-[30px] my-[15px]'><Link to={element.link} className='px-[20px] py-[10px]'>{element.title}</Link></li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;