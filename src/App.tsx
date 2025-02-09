import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, Calendar, Timer } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-05-04T14:00:00+05:30'); // Indian time (IST)

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            NEET UG 2025 COUNTDOWN
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
           Plan your studies efficiently with an interactive NEET 2025 countdown clock.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-6 text-center border border-gray-800">
            <div className="text-4xl md:text-6xl font-bold mb-2">{timeLeft.days}</div>
            <div className="text-sm uppercase tracking-wide">Days</div>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-6 text-center border border-gray-800">
            <div className="text-4xl md:text-6xl font-bold mb-2">{timeLeft.hours}</div>
            <div className="text-sm uppercase tracking-wide">Hours</div>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-6 text-center border border-gray-800">
            <div className="text-4xl md:text-6xl font-bold mb-2">{timeLeft.minutes}</div>
            <div className="text-sm uppercase tracking-wide">Minutes</div>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-6 text-center border border-gray-800">
            <div className="text-4xl md:text-6xl font-bold mb-2">{timeLeft.seconds}</div>
            <div className="text-sm uppercase tracking-wide">Seconds</div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold">Description</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            This website is designed for NEET 2025 aspirants to keep track of their exam countdown in a 
            visually appealing and interactive way. The live countdown timer displays the remaining days, 
            hours, minutes, and seconds until NEET UG 2025.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span>Date: Sunday, May 04, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-purple-400" />
              <span>Time: 02:00 PM to 5:20 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Duration: 3 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Mode: Offline (Pen & Paper)</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400 py-4">
          <p>Developed By EpexAyush</p>
          <p>© 2025 NEET Countdown Timer. All rights reserved.</p>
          <p className="mt-2">
            Time synchronized with Indian Standard Time (IST) | Powered by World Time API
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
