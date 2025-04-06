import React, { useEffect, useState } from 'react';

interface AvailabilityBadgeProps {
  location: string;
}

const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({ location }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentMonthYear, setCurrentMonthYear] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const indonesiaTime = new Date(now.getTime() + 7 * 60 * 60 * 1000);
      const hours = String(indonesiaTime.getUTCHours()).padStart(2, '0');
      const minutes = String(indonesiaTime.getUTCMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
      const monthYear = indonesiaTime.toLocaleString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
      setCurrentMonthYear(monthYear);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex items-center space-x-2 text-sm pr-16 font-medium">
      <a href='mailto:artenanagara22@gmail.com' className="text-red-500 font-semibold hover:text-[#FFEB00] hover:-translate-x-2  hover:scale-110 transition duration-700 ease-in-out ">
      {`Limited Time ${currentMonthYear}`}
      </a>
      <span className="text-gray-500">–</span>
      <span className="text-gray-700">{location}</span>
      <span className="text-gray-500 text-2xl">•</span>
      <span className="text-gray-700">{`${currentTime} UTC+7 `}</span>
    </div>
  );
};

export default AvailabilityBadge;
