'use client';
import React from 'react'

import { useState, useEffect, useCallback } from 'react';
import { Button } from 'reactstrap';

var headerArrayIndex = 0;
const differentHeaders = ['to inspire real change', 'to level the playing field', 'to unlock the potential of AI', 'to disrupt new industries', 'to build a new community'];

export const FadeCarousel = () => {

    const [headerText, setHeaderText] = useState(differentHeaders[0]);
    const [fadingState, setFading] = useState(0)  // just to re-render every time the animation ends 
    const [visibilityState, setVisibility] = useState("visible")
  
    const changeText = useCallback(() => {
        headerArrayIndex = (headerArrayIndex + 1) % differentHeaders.length;
        setHeaderText(differentHeaders[headerArrayIndex]);
      }, []);  
    
      useEffect(() => {
        setVisibility("hidden") // when the animation ends and the text is about to change, we make 
                                // the visibility hidden so that the animation change doesnt cause flickering
        setFading("none");
        
        requestAnimationFrame(()=>{
          setFading("fadeInOut 3s")
          setVisibility("visible")

        })
        
        const changeTimer = setTimeout(changeText, 3000);
        return () => clearTimeout(changeTimer)
      }, [headerText, changeText]);
    
  
  return (
    <div className='text-white'>
        <span className={"landing-page-yellow-header fadeLandingTitle"} style={{animation: fadingState, 
              visibility: visibilityState}}> 
              {headerText}
            </span>
    </div>
  )
}

export default FadeCarousel
