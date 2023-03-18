import React from "react";
import gsap from "gsap/gsap-core";
import { useEffect } from "react";
import { TimelineMax } from "gsap/gsap-core";
import { GrRotateLeft } from "react-icons/gr";

const BannerAnimation = () =>{

    useEffect(()=>{
        const box = document.querySelectorAll(".box");
        const Ibox = document.querySelectorAll(".Ibox");
        const IIbox = document.querySelectorAll(".IIbox");
        const IIIbox = document.querySelectorAll(".IIIbox");

        const tl = new TimelineMax({repeat: -1});

        tl.addLabel('moveBox')
                .to([box[0],box[2]], 1,  {left:0, delay:.2, marginLeft:'2px', marginRight:'2px'}, 'moveBox')
            .addLabel('show')
                .to(Ibox[0], {y:'-200px'}, 'show')
                .to(Ibox[1], {y:'200px'}, 'show')
            .addLabel('showX')
                .to(IIbox[0],{x:'200px'},'showX')
                .to(IIIbox[0],{x:'400px'},'showX')
                .to(IIbox[1],{x:'-200px'},'showX')
                .to(IIIbox[1],{x:'-400px'},'showX')
                .to('.boxes', {rotate:'90deg', delay:.2})
            .addLabel('hideX')
                .to([IIbox[0],IIbox[1]],{x:0},'hideX')
                .to([IIIbox[0],IIIbox[1]],{x:0},'hideX')
            .addLabel('hide')
                .to(box[0], {left:'200px', margin:'none'}, 'hide')
                .to(box[2], {left:'-200px', margin:'none'}, 'hide')
            .addLabel('hideY')
                .to(Ibox[0], {y:0}, 'hideY')
                .to(Ibox[1], {y:0}, 'hideY')
            .fromTo('.bgB', {x:'-220px'}, {x:0, delay:.2})
                .to('.boxes', {rotate:'180deg', duration:1, })
                .to('.bgB', {y:'-220px'})
    },[])
    
    return(
        <div className="boxes w-[80%] flex m-auto">
                <div className="box border-[2px] border-black w-[200px] h-[200px] relative left-[200px]">
                    <div className="Ibox border-[2px] border-black w-[200px] h-[200px] relative">
                        <div className="IIbox border-[2px] border-black w-[200px] h-[200px] relative"></div>
                        <div className="IIIbox border-[2px] border-black w-[200px] h-[200px] relative top-[-200px]"></div>
                    </div>
                </div>
                    <div className="box border-[2px] border-black w-[200px] h-[200px] z-50 overflow-hidden">
                        <div className="bgB w-[220px] h-[220px] bg-black"></div>
                </div>
             <div className="box border-[2px] border-black w-[200px] h-[200px] relative left-[-200px]">
                <div className="Ibox border-[2px] border-black w-[200px] h-[200px] relative">
                    <div className="IIbox border-[2px] border-black w-[200px] h-[200px] relative"></div>
                    <div className="IIIbox border-[2px] border-black w-[200px] h-[200px] relative top-[-200px]"></div>
                </div>
             </div>
    </div>
    )

}

export default BannerAnimation;