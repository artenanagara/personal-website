import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate, AnimationControls } from 'framer-motion';

// Tidak ada perubahan pada data gambar
const images = [
  {
    src: 'https://cdn.dribbble.com/userupload/15354141/file/original-d91d339d1fb58c2ecf15be404fae0516.png?resize=1024x768&vertical=center',
    url: 'https://dribbble.com/shots/24438455-Finansiku-Finance-Landing-Page'
  },
  {
    src: 'https://cdn.dribbble.com/userupload/43399396/file/original-9d3525b9aab6058d2086ccffec6927db.jpg?resize=1024x768&vertical=center',
    url: 'https://dribbble.com/shots/26051673-Kemayu-Beauty-Clinic-Homepage'
  },
  {
    src: 'https://cdn.dribbble.com/userupload/15454180/file/original-16cf8321ec01359363643379605a214a.png?resize=1024x768&vertical=center',
    url: 'https://dribbble.com/shots/24472371-BuyCar-Automotive-Landing-Page'
  },
  {
    src: 'https://cdn.dribbble.com/userupload/13127156/file/original-701489418a9b8ff84c3dc4ac5425bdfe.jpg?resize=752x564&vertical=center',
    url: 'https://dribbble.com/shots/23668006--Umah-Real-Estate-Landing-Page'
  },
  {
    src: 'https://cdn.dribbble.com/userupload/43315629/file/original-3fe75f38f4d5408916e8a12e37567bd3.png?resize=1024x768&vertical=center',
    url: 'https://dribbble.com/shots/26025028-Ecovolt-Electric-Vehicle-Power-Landing-Page'
  }
];

const ScrollingGallery = () => {
  const x = useMotionValue(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Duplikasi gambar untuk loop yang mulus
  const [duplicatedImages] = useState([...images, ...images]);
  const [animation, setAnimation] = useState<AnimationControls | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    // Logika utama animasi
    const startAnimation = () => {
      // Hitung lebar total dari konten di dalam flexbox
      const totalContentWidth = galleryElement.scrollWidth;
      // Lebar dari satu set gambar adalah setengah dari total
      const singleSetWidth = totalContentWidth / 2;

      // GUARD: Jangan jalankan animasi jika lebar belum terhitung (masalah umum saat deploy)
      if (singleSetWidth === 0) {
        console.warn("Gallery width is 0, animation delayed.");
        // Coba lagi setelah penundaan singkat untuk memberi waktu browser menghitung layout
        setTimeout(startAnimation, 100); 
        return;
      }

      const anim = animate(x, [-singleSetWidth, 0], {
        duration: 30, // Durasi bisa disesuaikan, lebih lambat lebih baik
        ease: "linear",
        repeat: Infinity,
      });
      setAnimation(anim);
    };
    
    startAnimation();

    // Cleanup function untuk menghentikan animasi saat komponen di-unmount
    return () => {
      animation?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // <-- Jalankan useEffect ini hanya sekali saat komponen pertama kali mount

  // Efek terpisah untuk menangani pause/resume saat hover
  useEffect(() => {
    if (isHovering) {
      animation?.pause();
    } else {
      animation?.play();
    }
  }, [isHovering, animation]);


  return (
    <div
      className='w-full md:h-screen flex flex-col gap-8 pb-16 pt-20 overflow-hidden' // Tambahkan overflow-hidden di sini
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className='text-4xl md:text-6xl'>another exploration</h2>
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          ref={galleryRef}
          className="flex cursor-pointer gap-8" // PERBAIKAN: Gunakan 'gap' untuk spasi, lebih robust
          style={{ x }}
        >
          {duplicatedImages.map((image, index) => (
            <a
              key={index}
              // PERBAIKAN: Gunakan lebar yang lebih fleksibel dan pastikan item tidak menyusut
              className='flex-shrink-0 w-[45vw] md:w-[40vw]' 
              href={image.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <motion.img
                src={image.src}
                alt={`Gallery image ${index + 2}`}
                className="w-full h-auto object-cover" // h-auto menjaga rasio aspek
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingGallery;