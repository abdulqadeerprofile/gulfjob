'use client';

import { useEffect, useState } from 'react';

export default function LiveTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-gray-700 font-semibold">
      {time.toLocaleTimeString()} | {time.toLocaleDateString()}
    </div>
  );
}