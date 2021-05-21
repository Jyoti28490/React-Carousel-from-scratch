import React from 'react';
import './Slides.css'
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/img4.jpg';
import img5 from '../Assets/img5.jpg';

const Slides = ({activeIndex,numberArray,len}) => {
    return (
    <div class="slides-box">
       
       <div class="slide"
       style={{transition:"all 0.2s"}}
       >

         <div className="card"
         style={{transform:`translateX(${activeIndex*-30}rem)`}}
         > 
         {numberArray.map((img,activeIndex) =>
         <img
         key={img+activeIndex}
         src={img} 
         alt="photo" 
         style={{height: "100%"}}
         />
         )}
         {/* <img src={img1} alt="img-1" style={{height: "100%",marginLeft:"-16rem",transform:`translateX(${activeIndex*-30}rem)`}} />
         <img src={img2} alt="img-1" style={{height: "100%", transform:`translateX(${activeIndex*-30}rem)`}} />
         <img src={img3} alt="img-1" style={{height: "100%", transform:`translateX(${activeIndex*-30}rem)`}} />
         <img src={img4} alt="img-1" style={{height: "100%",transform:`translateX(${activeIndex*-30}rem)`}} />
         <img src={img5} alt="img-1" style={{height: "100%",transform:`translateX(${activeIndex*-30}rem)`}} />
         <img src={img2} alt="img-1" style={{height: "100%",transform:`translateX(${activeIndex*-30}rem)`}} /> */}
     </div>
     {/* <div className="utility">
        <p className="utility__inner">{activeIndex+1}/{len}</p>
     </div> */}
     
      {/* {
      numberArray.map((slide,i) =>
      <div className="card" key={slide+i}
      style={{
        width:"30rem",
        height:"20rem",
        padding:"0 14rem",
        boxSizing:"border-box",
        backgroundColor:"pink",
        margin:"0 2px 0 0",
      }}
      >
      <img src="{slide}" alt="image-1" style=
      {{
        // height: "100%",
        width: "100%",
        // transform:translateX(`-i*30rem`),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
      }}
      /> 
      </div>
      )} */}
     </div>

     
    

    

    

    {/* <div class="bottombar">
      Hello
    </div> */}
    
</div>
       
    )
}

export default Slides

// transform:`translateX((-30 * ${activeIndex})rem)`


