import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const AutoType = () => {
  const typedRef = useRef(null); 

  useEffect(() => {
    
    const options = {
      strings: ["Full Stack Web developer", "Web Designer","MERN Stack developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    
    const typedInstance = new Typed(typedRef.current, options);

    
    return () => {
      typedInstance.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className='ms-md-4 ms-lg-4 mt-3'> <span className="auto-type" ref={typedRef}></span> </h1>
    </div>
  );
};
