import React, { useState, useEffect } from 'react';  
  
const ScrollToTopButton: React.FC = () => {  
  // State untuk menentukan apakah tombol scroll to top harus ditampilkan atau tidak  
  const [isVisible, setIsVisible] = useState<boolean>(false);  
  
  // Fungsi untuk menangani scroll window  
  const toggleVisibility = () => {  
    if (window.pageYOffset > 300) {  
      setIsVisible(true);  
    } else {  
      setIsVisible(false);  
    }  
  };  
  
  // Fungsi untuk melakukan scroll ke atas  
  const scrollToTop = () => {  
    window.scrollTo({  
      top: 0,  
      behavior: 'smooth'  
    });  
  };  
  
  // Menambahkan event listener untuk scroll saat komponen dimuat  
  useEffect(() => {  
    window.addEventListener('scroll', toggleVisibility);  
  
    // Membersihkan event listener saat komponen di-unmount  
    return () => {  
      window.removeEventListener('scroll', toggleVisibility);  
    };  
  }, []);  
  
  return (  
    <div>  
      {isVisible && (  
        <div  
          onClick={scrollToTop}  
          style={{  
            position: 'fixed',  
            bottom: '20px',  
            right: '20px',  
            cursor: 'pointer',  
            padding: '10px',  
            backgroundColor: '#007bff',  
            color: '#fff',  
            borderRadius: '50%',  
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)'  
          }}  
        >  
          &#8593;  
        </div>  
      )}  
    </div>  
  );  
};  
  
export default ScrollToTopButton;  
