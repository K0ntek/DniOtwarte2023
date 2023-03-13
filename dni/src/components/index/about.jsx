import React from "react";
import CountUp from "react-countup";
import { useEffect } from "react";
import {useInView} from 'react-intersection-observer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const About =()=>{
    const [ref, inView] = useInView({threshold:0.65});

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.about .element', {y:'200px', opacity:0}, {y:0, opacity:1, duration:.7, stagger:.2,
            scrollTrigger:{trigger:'.about',
                            start:'top 90%',
                            toggleActions: "restart",
                        }})
     },[])

    return(
        <div className="bg-black p-[100px] text-[20px] border-t-[10px] border-red-600" ref={ref}>
            <h1 className=" font-orbitron text-center text-[40px] text-red-600 mb-[50px]">O SZKOLE</h1>

            <div className="about flex justify-center space-x-10 sm:space-x-[150px]">
                <div className="group element hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-[crimson] rounded-3xl ">
                    <div className="text-center p-[20px] rounded-3xl border-[2px] border-[crimson]">
                        <div className=" text-[50px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] group-hover:text-black">
                            {inView ? <CountUp start={0} end={8} duration={2}/> : 0}
                        </div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] font-gruppo font-bold text-[25px] group-hover:text-black"><p>Kierunków<br/> Technikum</p></div>
                    </div>
                </div>
                <div className="group element hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-[crimson] rounded-3xl">
                    <div className="text-center p-[20px] px-[40px] rounded-3xl border-[2px] border-[crimson]">
                    <div className=" text-[50px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] group-hover:text-black">
                            {inView ? <CountUp start={0} end={54} duration={2} delay={.5}/> : 0}
                        </div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] font-gruppo font-bold text-[25px] group-hover:text-black"><p>Miejsce<br/> Polsce</p></div>
                    </div>
                </div>
                <div className="group element hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-[crimson] rounded-3xl">
                    <div className= "text-center p-[20px] rounded-3xl border-[2px] border-[crimson]">
                    <div className=" text-[50px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] group-hover:text-black">
                            {inView ? <CountUp start={0} end={7} duration={2} delay={.5}/> : 0}
                        </div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] font-gruppo font-bold text-[25px] group-hover:text-black"><p>Kierunków<br/> Szkoły Branżowej</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;