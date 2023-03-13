import React from "react";
import About from "./index/about";
import Banner from "./index/banner";
import Offer from "./index/offer";

const Index =()=>{
    return(
        <>
            <Banner />
            <About/>
            <div className="w-full h-[10px] bg-gradient-to-r from-fuchsia-700 to-red-700"></div>
            <Offer/>
        </>
    )
}

export default Index;