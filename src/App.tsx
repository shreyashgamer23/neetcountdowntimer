import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, Calendar, Timer, MessageCircle, Link } from 'lucide-react';

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
            hours, minutes, and seconds until NEET UG 2025. The exam consists of 180 questions from Physics, 
            Chemistry, and Biology (Botany & Zoology).
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span>Date: Sunday, May 04, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Duration: 3 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Mode: Offline (Pen & Paper)</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Questions: 180 (Physics, Chemistry & Biology)</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              <span>Telegram: @EpexAyush</span>
            </div>
            <div className="flex items-center gap-2">
              <Link className="w-5 h-5 text-purple-400" />
              <a href="https://neet.nta.nic.in/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                Official NEET Website
              </a>
            </div>
          </div>
        </div>

        {/* NEET Guide Section */}
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800 prose prose-invert">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            National Eligibility cum Entrance Test (NEET): A Complete Guide
          </h2>
          
          <p className="mb-6">
            NEET (National Eligibility cum Entrance Test) is the gateway for students aspiring to pursue undergraduate medical (MBBS), dental (BDS), and AYUSH (BAMS, BHMS, etc.) courses in India. Conducted by the <strong>National Testing Agency (NTA)</strong>, NEET is one of the most competitive exams in the country, with over 20 lakh students appearing every year.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-purple-400">Exam Structure and Syllabus</h3>
          <p className="mb-4">
            NEET is a <strong>pen-and-paper-based test</strong> consisting of 180 multiple-choice questions (MCQs) divided into three subjects:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Physics</strong> – 50 questions (out of which 45 need to be attempted)</li>
            <li><strong>Chemistry</strong> – 50 questions (45 to be attempted)</li>
            <li><strong>Biology (Botany + Zoology)</strong> – 100 questions (90 to be attempted)</li>
          </ul>
          <p className="mb-6">
            Each correct answer carries <strong>4 marks</strong>, while <strong>1 mark is deducted for every incorrect response</strong>. The total exam duration is <strong>3 hours and 20 minutes</strong>.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-purple-400">Eligibility Criteria</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Minimum Age:</strong> 17 years as of December 31 of the exam year.</li>
            <li><strong>Maximum Age:</strong> No upper age limit.</li>
            <li><strong>Educational Qualification:</strong> Candidates must have passed <strong>Class 12</strong> or equivalent with <strong>Physics, Chemistry, Biology/Biotechnology, and English</strong>.</li>
            <li><strong>Minimum Marks Required:</strong> General category – 50%, OBC/SC/ST – 40%, and PwD – 40% in PCB subjects.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-purple-400">NEET Preparation Strategy</h3>
          
          <h4 className="text-xl font-bold mb-2">1. Understand the Syllabus and Exam Pattern</h4>
          <p className="mb-4">
            Since NEET follows the NCERT syllabus, students should focus primarily on NCERT books, while also referring to additional study materials and question banks.
          </p>

          <h4 className="text-xl font-bold mb-2">2. Create a Study Plan</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Divide time efficiently among all three subjects.</li>
            <li>Set daily, weekly, and monthly targets to ensure systematic revision.</li>
            <li>Solve <strong>previous years' papers</strong> and take <strong>mock tests</strong> regularly.</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">3. Practice Time Management</h4>
          <p className="mb-4">
            Time management is key to solving <strong>180 questions in 200 minutes</strong>. Practicing full-length mock tests helps in improving speed and accuracy.
          </p>

          <h4 className="text-xl font-bold mb-2">4. Strengthen Weak Areas</h4>
          <p className="mb-4">
            Identify weak topics through self-assessment and work on them systematically. Taking topic-wise tests can help reinforce concepts.
          </p>

          <h4 className="text-xl font-bold mb-2">5. Revise Regularly</h4>
          <p className="mb-4">
            Consistent revision of important formulas, diagrams, and concepts is essential to retain information effectively.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-purple-400">NEET Exam Day Guidelines</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Carry a <strong>valid admit card</strong>, passport-size photograph, and an ID proof.</li>
            <li>Follow the <strong>dress code</strong> prescribed by NTA (avoid metallic items, shoes, and accessories).</li>
            <li>Reach the exam center at least <strong>an hour before</strong> the scheduled time.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-purple-400">Conclusion</h3>
          <p>
            NEET is a challenging yet achievable exam with the right strategy, dedication, and consistent efforts. Aspiring medical students should focus on <strong>concept clarity, practice, and revision</strong> to secure a high rank and gain admission to top medical colleges in India. With determination and a structured approach, success in NEET is within reach!
          </p>
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
