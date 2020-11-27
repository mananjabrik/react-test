import React from 'react';
import mountain from './imgSlider/mountains.jpg';
import nature from './imgSlider/nature.jpg';
import snow from './imgSlider/snow.jpg';


function imageSlider() {

    var imgSlider = {
        mountain, 
        nature, 
        snow
    };
    var x = imgSlider;

    return (
        <div>
            <img src={x.mountain} alt=""/>
            <img src={x.nature} alt=""/>
            <img src={x.snow} alt=""/>
        </div>
    )
}

export default imageSlider
