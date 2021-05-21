import React from 'react';
import './Dots.css';

// const Dot = ({ active }) => (
//     <div
//       style={{
//         ,
//       }}
//     />
//   )
  

const Dots = ({activeIndex,numberArray, setActiveIndex}) => {

    return (
        <div className="dots">         
          {numberArray.map((item,i)=>(
            <div
             key={item+i}
             className={`slideshowDot${activeIndex === i ? " active" : ""}`}
             onClick={() => {
             setActiveIndex(i);   
              }}
              />
              
          ))}

        </div>
    )
}

export default Dots

{/* <Dot key={item+i} active={activeIndex===i} onClick={() => setActiveIndex(i)}/> */}
