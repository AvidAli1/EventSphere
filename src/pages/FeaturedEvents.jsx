"use client"

import { useState, useMemo, useEffect } from "react"
import Header from "../components/Header.jsx"
import EventCard from "../components/EventCard.jsx"
import Footer from "../components/Footer.jsx"
import { Search, Calendar, Sparkles } from "lucide-react"
import eventsData from "../data/events.json"
import Lottie from "lottie-react";
import globe1 from '../assets/globe1.json'
import globe2 from '../assets/globe2.json'


export default function FeaturedEvents() {
  const [searchTerm, setSearchTerm] = useState("")
  const [animate, setAnimate] = useState(false);

  const filteredEvents = useMemo(() => {
    return eventsData.events.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] xl:grid-cols-[65%_35%] items-center gap-6 sm:gap-8 lg:gap-12 max-w-7xl">
            {/* Left Column: Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 lg:pr-8 xl:pr-12">
              {/* Sparkle Animation - Desktop Only */}
              <div className="hidden lg:flex items-center mb-6 xl:mb-8 ml-28">
                <div className="relative mb-4">
                  {/* Sparkle constellation */}
                  <div className="flex justify-start items-center mb-4 relative">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-blue-400/20 rounded-full blur-3xl scale-150"></div>

                    {/* Sparkle 1 - Small leading */}
                    <div className="relative p-3 bg-gradient-to-br from-yellow-300/30 to-amber-400/30 rounded-full backdrop-blur-lg border border-yellow-300/30 shadow-lg"
                      style={{ transform: 'translateX(-120px) translateY(-20px)' }}>
                      <Sparkles className="w-4 h-4 text-yellow-200 drop-shadow-lg" />
                    </div>

                    {/* Sparkle 2 - Medium left */}
                    <div className="relative p-4 bg-gradient-to-br from-pink-300/30 to-rose-400/30 rounded-full backdrop-blur-lg border border-pink-300/30 shadow-xl"
                      style={{ transform: 'translateX(-60px) translateY(10px)' }}>
                      <Sparkles className="w-7 h-7 text-pink-200 drop-shadow-lg" />
                    </div>

                    {/* Sparkle 3 - Large center (hero) */}
                    <div className="relative p-6 bg-gradient-to-br from-blue-300/40 to-cyan-400/40 rounded-full backdrop-blur-lg border-2 border-blue-300/40 shadow-2xl">
                      <Sparkles className="w-16 h-16 text-blue-100 drop-shadow-xl" />
                      {/* Central glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full blur-xl scale-150"></div>
                    </div>

                    {/* Sparkle 4 - Medium right */}
                    <div className="relative p-4 bg-gradient-to-br from-purple-300/30 to-violet-400/30 rounded-full backdrop-blur-lg border border-purple-300/30 shadow-xl"
                      style={{ transform: 'translateX(60px) translateY(-15px)' }}>
                      <Sparkles className="w-7 h-7 text-purple-200 drop-shadow-lg" />
                    </div>

                    {/* Sparkle 5 - Small trailing */}
                    <div className="relative p-3 bg-gradient-to-br from-emerald-300/30 to-teal-400/30 rounded-full backdrop-blur-lg border border-emerald-300/30 shadow-lg"
                      style={{ transform: 'translateX(120px) translateY(25px)' }}>
                      <Sparkles className="w-4 h-4 text-emerald-200 drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-4 xl:pl-0 -ml-0 md:-ml-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
                  Discover Events Near You
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 max-w-2xl mx-auto lg:mx-0">
                  Uncover amazing experiences, connect with your community, and create unforgettable memories
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-xl lg:-mx-12 relative mb-8 sm:mb-12 lg:mb-14 px-2 sm:px-0">
                <div className="relative flex items-center">
                  <div className="absolute left-3 sm:left-4 z-10">
                    <img
                      src="./search-icon.png"
                      alt="Search"
                      className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      style={{ filter: 'opacity(0.6)' }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search events by name, category, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[100%] pl-10 sm:pl-12 md:pl-14 pr-3 sm:pr-4 py-2.5 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm text-gray-800 border-0 shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 text-sm sm:text-base md:text-lg placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Animation */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-56 h-56 md:w-64 md:h-64 lg:w-76 lg:h-76 xl:w-112 xl:h-112 rounded-full overflow-hidden transform translate-x-0 md:translate-x-12 -translate-y-0 md:-translate-y-6 bg-gradient-to-br from-purple-500 to-pink-500">
                <Lottie
                  animationData={globe1}
                  loop={true}
                  autoPlay={true}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Animated waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 fill-slate-50">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Featured Events</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked experiences that will inspire, entertain, and connect you with your community
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search terms to find more events.</p>
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">500+</div>
                <div className="text-indigo-200">Events Monthly</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">50K+</div>
                <div className="text-indigo-200">Happy Attendees</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">25+</div>
                <div className="text-indigo-200">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}