import React from "react";
import gsap from "gsap/gsap-core";
import { useEffect } from "react";
import { TimelineMax } from "gsap/gsap-core";
import { GrRotateLeft } from "react-icons/gr";

const BannerAnimation = () =>{

    useEffect(()=>{
        const box = document.querySelectorAll(".box");

        const tl = new TimelineMax({repeat: -1});

        tl.addLabel('moxeBox')
            .to([box[0],box[2]], 1,  {left:0, delay:2}, 'moxeBox')
            .to('.boxes', {rotate:'90deg', duration:1, })
            .addLabel('hide')
            .to(box[0], {left:'202px'}, 'hide')
            .to(box[2], {left:'-202px'}, 'hide')
            .fromTo('.bgB', {x:'-220px'}, {x:0, delay:.2})
            .to('.boxes', {rotate:'180deg', duration:1, })
            .to('.bgB', {y:'-220px'})
    },[])
    
    return(
        <div className="boxes w-[80%] flex m-auto">
        <div className="box border-[2px] border-black w-[200px] h-[200px] relative left-[200px]"></div>
        <div className="box border-[2px] border-black w-[200px] h-[200px] z-50 mx-[2px] overflow-hidden">
            <div className="bgB w-[220px] h-[220px] bg-black"></div>
        </div>
        <div className="box border-[2px] border-black w-[200px] h-[200px] relative left-[-200px]"></div>
    </div>
    )

}

export default BannerAnimation;