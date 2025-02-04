import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Pindahkan scroll ke atas
  }, [pathname]); // Jalankan efek setiap kali path berubah

  return null; // Tidak perlu render apa pun
};

export default ScrollToTop;
