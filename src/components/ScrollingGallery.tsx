import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const images = [
    {
        src: 'https://cdn.dribbble.com/userupload/15354141/file/original-d91d339d1fb58c2ecf15be404fae0516.png?resize=1024x768&vertical=center',
        url: 'https://dribbble.com/shots/24438455-Finansiku-Finance-Landing-Page'
    },
    {
        src: 'https://cdn.dribbble.com/userupload/15454180/file/original-16cf8321ec01359363643379605a214a.png?resize=1024x768&vertical=center',
        url: 'https://dribbble.com/shots/24472371-BuyCar-Automotive-Landing-Page'
    },
    {
        src: 'https://cdn.dribbble.com/userupload/13127156/file/original-701489418a9b8ff84c3dc4ac5425bdfe.jpg?resize=752x564&vertical=center',
        url: 'https://dribbble.com/shots/23668006--Umah-Real-Estate-Landing-Page'
    }
];

const ScrollingGallery = () => {
    const controls = useAnimation();
    const slideRange = 1000;

    React.useEffect(() => {
        const sequence = async () => {
            await controls.start(() => ({
                x: [ `-${slideRange}px`, '0%'],
                transition: { repeat: Infinity, duration: 20, ease: "linear" }
            }));
        };

        sequence();
    }, [controls]);

    const handleMouseEnter = () => {
      controls.stop();
    };

    const handleMouseLeave = (event: React.MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const currentPosition = event.clientX - slideRange;
      controls.start({
        x: [currentPosition, '0%'],
        transition: { repeat: Infinity, duration: 20, ease: "linear" }
      });
    };

    return (
        <div className='w-full h-full flex flex-col gap-8 pb-16 pt-20'>
            <h2 className='text-4xl md:text-6xl'>another exploration</h2>
            <div className="overflow-hidden relative w-full">
                <motion.div
                    className="flex cursor-pointer gap-8"
                    animate={controls}
                    initial={{ x: '0%' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {images.concat(images).map((src: { src: string; url: string }, index: number) => (
                        <a className='w-1/2 flex-shrink-0 object-cover' href={src.url} target='_blank' rel='noopener noreferrer'>
                            <motion.img
                                key={index}
                                src={src.src}
                                alt={`Gallery ${index}`}
                                className="w-full flex-shrink-0 object-cover"
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