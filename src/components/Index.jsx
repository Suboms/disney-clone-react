import React from 'react';
import Navbar from './Navbar';
import SectionOne from './Carousel';
import Event from './Event';
import News from './News';
const Index = ()=>{

    return(
        <>
        <div className="navbar">
            <Navbar/>
        </div>
        <main>
        <SectionOne/>
        <Event/>
        <News/>
        </main>
        </>
    )

}

export default Index