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
        <div className="bg-black p-[100px] text-[20px]" ref={ref}>
            <h1 className=" font-orbitron text-center text-[40px] text-red-600 mb-[50px]">O SZKOLE</h1>

            <div className="about flex justify-center space-x-10 sm:space-x-[150px]">
                <div className="element">
                    <div className="text-center p-[20px] rounded-3xl border-[2px] border-[crimson]">
                        <div className=" text-[50px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson]">
                            {inView ? <CountUp start={0} end={8} duration={2}/> : 0}
                        </div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] font-gruppo font-bold text-[25px]"><p>Kierunków<br/> kształcenia</p></div>
                    </div>
                </div>
                <div className="element">
                    <div className="text-center p-[20px] px-[40px] rounded-3xl border-[2px] border-[crimson]">
                        <div className=" text-[50px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson]">
                            {inView ? <CountUp start={0} end={60} duration={2} delay={.5}/> : 0}
                        </div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] font-gruppo font-bold text-[25px]"><p>Miejsce<br/> Polsce</p></div>
                    </div>
                </div>
                <div className="element">
                    <div className= "text-center p-[20px] rounded-3xl border-[2px] border-[crimson]">
                        <div className=" text-[50px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson]">
                            {inView ? <CountUp start={0} end={10} duration={2} delay={.5}/> : 0}
                        </div>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] font-gruppo font-bold text-[25px]"><p>Kierunków<br/> kształcenia</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;