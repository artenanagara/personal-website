import React, { useEffect, useRef } from 'react';  
  
interface JerkyScrollProps {  
  children: React.ReactNode;  
  snapIncrement?: number;  
}  
  
const JerkyScroll: React.FC<JerkyScrollProps> = ({ children, snapIncrement = 30 }) => {  
  const scrollContainerRef = useRef<HTMLDivElement>(null);  
  
  useEffect(() => {  
    const handleScroll = () => {  
      if (scrollContainerRef.current) {  
        const scrollPosition = scrollContainerRef.current.scrollTop;  
        const targetPosition = Math.round(scrollPosition / snapIncrement) * snapIncrement;  
        if (scrollPosition !== targetPosition) {  
          scrollContainerRef.current.scrollTo({  
            top: targetPosition,  
            behavior: 'smooth',  
          });  
        }  
      }  
    };  
  
    const scrollContainer = scrollContainerRef.current;  
    if (scrollContainer) {  
      scrollContainer.addEventListener('scroll', handleScroll);  
    }  
  
    return () => {  
      if (scrollContainer) {  
        scrollContainer.removeEventListener('scroll', handleScroll);  
      }  
    };  
  }, [snapIncrement]);  
  
  return (  
    <div  
      ref={scrollContainerRef}  
      className="h-screen overflow-y-scroll snap-y snap-mandatory"  
    >  
      {children}  
    </div>  
  );  
};  
  
export default JerkyScroll;  
