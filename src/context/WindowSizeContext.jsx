import React, { createContext, useContext, useEffect, useState } from "react";


const windowSizeContext = createContext();

export const WindowsSizeProvider = ({children}) =>{
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return(<windowSizeContext.Provider value={size}>{children}</windowSizeContext.Provider>)
};

export const useWindowSizeContext = ()=> useContext(windowSizeContext);
