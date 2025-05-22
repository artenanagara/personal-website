// artenanagara/personal-website/personal-website-90a1bbd45254bc0a4b1bf95149eb8f1d7851424b/src/components/ScrollingGallery.tsx
import React, { useEffect, useRef, useState } from 'react'; // Tambahkan useState
import { motion, useMotionValue, animate } from 'framer-motion';

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
  const [duplicatedImages, setDuplicatedImages] = useState([...images, ...images]);
  const [currentAnimation, setCurrentAnimation] = useState<{ stop: () => void } | null>(null);

  // Jika Anda ingin pause on hover, Anda memerlukan state untuk itu
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Update duplikasi gambar jika array 'images' berubah (jarang terjadi untuk konstanta)
    setDuplicatedImages([...images, ...images]);
  }, [images]);


  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement || duplicatedImages.length === 0) {
      // Hentikan animasi sebelumnya jika ada
      currentAnimation?.stop();
      setCurrentAnimation(null);
      return;
    }

    // Hitung lebar total dari SEMUA item (termasuk gap jika ada)
    // galleryElement.scrollWidth adalah cara yang baik untuk mendapatkan lebar konten internal flex
    const totalContentWidth = galleryElement.scrollWidth;
    const singleSetWidth = totalContentWidth / 2; // Karena kita menduplikasi konten

    if (singleSetWidth === 0) return; // Jangan mulai animasi jika lebarnya nol

    // Hentikan animasi sebelumnya sebelum memulai yang baru
    currentAnimation?.stop();

    const animation = animate(x, -singleSetWidth, {
      duration: 20, // Sesuaikan durasi (misalnya 20 detik untuk satu siklus)
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      // onRepeat akan dipanggil setiap kali animasi selesai satu siklus dan akan diulang
      // onUpdate: (latest) => {
      //   console.log("x is", latest);
      // }
    });

    setCurrentAnimation(animation);

    return () => {
      animation.stop();
      setCurrentAnimation(null);
    };
    // Dependency array:
    // - x: Nilai motion value
    // - duplicatedImages.length: Untuk merestart animasi jika jumlah gambar berubah
    // - isHovering: Jika Anda mengimplementasikan pause on hover
  }, [x, duplicatedImages.length, isHovering]); // Tambahkan isHovering jika digunakan

  const handleMouseEnter = () => {
    setIsHovering(true);
    currentAnimation?.stop(); // Hentikan animasi saat hover
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Animasi akan otomatis dimulai ulang oleh useEffect karena isHovering berubah
    // dan useEffect akan menjalankan ulang logikanya.
  };

  return (
    <div
      className='w-full md:h-screen flex flex-col gap-8 pb-16 pt-20'
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className='text-4xl md:text-6xl'>another exploration</h2>
      <div className="overflow-hidden relative w-full">
        <motion.div
          ref={galleryRef}
          className="flex cursor-pointer" 
          style={{ x }}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
        >
          {duplicatedImages.map((image, index) => (
            <a
              key={index}
              className='flex-shrink-0'
              style={{
                width: `calc(${100 / 2}% - 16px)`,
                paddingRight: index < duplicatedImages.length -1 ? '32px' : '0px'
              }}
              href={image.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <motion.img
                src={image.src}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover" // h-auto untuk menjaga rasio aspek
                whileHover={{ scale: 1.05 }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingGallery;