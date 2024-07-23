// Timer.js
import React, { useState, useEffect } from "react";

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 10,
      hours: 10,
      minutes: 10,
      seconds: 10,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-2 w-full  justify-center">
      <div className="flex flex-col items-center w-16 justify-center">
        <span className="text-3xl text-[#EF443B] font-bold">
          {timeLeft.days}
        </span>
        <span>Days</span>
      </div>
      :
      <div className="flex flex-col items-center w-16 justify-center">
        <span className="text-3xl text-[#EF443B] font-bold">
          {timeLeft.hours}
        </span>
        <span>Hours</span>
      </div>
      :
      <div className="flex flex-col items-center w-16 justify-center">
        <span className="text-3xl text-[#EF443B] font-bold">
          {timeLeft.minutes}
        </span>
        <span>Minutes</span>
      </div>
      :
      <div className="flex flex-col items-center w-16 justify-center">
        <span className="text-3xl text-[#EF443B] font-bold">
          {timeLeft.seconds}
        </span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
