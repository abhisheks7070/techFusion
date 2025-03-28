import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-50"
          >
            <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">
              The Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Technology</span> is Here
            </h1>
            <p className="max-w-3xl mx-auto font-semibold text-xl md:text-2xl text-gray-300 mb-8">
              Empower your life with technology on your wrist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/pricing"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md text-lg font-semibold transition duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
               <img className='w-8 h-8 object-contain' src="https://cdn-icons-png.flaticon.com/512/896/896442.png" alt="" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Clock Features</h3>
              <p className="text-gray-600">
                Time/date, GPS Time Syncing, Automatic, daylight-saving time, Alarm clock, Timer, Stopwatch, Sunrise/sunset times.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Heart & Health Monitoring</h3>
              <p className="text-gray-600">
                Heart Rate, Daily Resting Heart Rate, Abnormal Heart Rate Detection Alerts, Respiration rate, Blood Oxygen Saturation, Stress Tracking, Relaxation reminders and breathing strategies, Sleep Monitoring.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-white mb-4">
                <img className='w-6 h-8 object-contain' src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Location & Activity Tracking</h3>
              <p className="text-gray-600">
                Step counter, Movement reminders, Daily Activity Goals, Calories burned, Elevation changes, Distance traveled
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                Intuitive Interface
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Designed with user experience in mind, our interface makes complex tasks simple and enjoyable.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-700">Attractive UI</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-700">Collection of clock theme</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-700">Tested accuracy</p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                loading='lazy'
                className="w-full h-150 object-contain rounded-lg shadow-xl ring-1 ring-gray-200 ring-opacity-2 animate-float"
                src="https://m.media-amazon.com/images/I/613G3YAzwgL._AC_SL1500_.jpg"
                alt="Product screenshot"
              />

            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-5xl font-extrabold mb-2 animate-bounce">10,000+</p>
              <p className="text-xl">Happy Customers</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-extrabold mb-2 animate-bounce">99.99%</p>
              <p className="text-xl">Uptime Guarantee</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-extrabold mb-2 animate-bounce">24/7</p>
              <p className="text-xl">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;