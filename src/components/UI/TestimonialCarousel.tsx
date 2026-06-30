import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Briefcase } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoplay = true,
  autoplayInterval = 5000
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, testimonials.length]);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  if (testimonials.length === 0) {
    return <div>No testimonials available</div>;
  }

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial Display */}
      <div 
        className="relative rounded-3xl overflow-hidden min-h-[400px]"
        style={{ background: 'var(--bg2)', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="p-8 md:p-12"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="h-16 w-16" style={{ color: 'var(--accent)' }} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < activeTestimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm" style={{ color: 'var(--muted)' }}>
                  {activeTestimonial.rating}/5
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl leading-relaxed mb-8 italic" style={{ color: 'var(--text)' }}>
                "{activeTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 shadow-lg"
                      style={{ borderColor: 'var(--bg2)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-20"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                      {activeTestimonial.name}
                    </h4>
                    <p className="font-medium" style={{ color: 'var(--accent)' }}>
                      {activeTestimonial.role}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      {activeTestimonial.company}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center text-sm mb-1" style={{ color: 'var(--dimmer)' }}>
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>{activeTestimonial.projectType}</span>
                  </div>
                  <div className="flex items-center text-sm" style={{ color: 'var(--dimmer)' }}>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{activeTestimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {testimonials.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
            >
              <ChevronLeft className="h-5 w-5" style={{ color: 'var(--text)' }} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
            >
              <ChevronRight className="h-5 w-5" style={{ color: 'var(--text)' }} />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {testimonials.length > 1 && (
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'scale-125'
                  : 'hover:opacity-80'
              }`}
              style={{ background: index === activeIndex ? 'var(--accent)' : 'var(--bg3)' }}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Navigation */}
      {testimonials.length > 1 && (
        <div className="flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                index === activeIndex
                  ? 'shadow-lg'
                  : 'hover:opacity-80'
              }`}
              style={{ 
                background: index === activeIndex ? 'var(--bg3)' : 'transparent',
                border: index === activeIndex ? '1px solid var(--accent)' : '1px solid transparent'
              }}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-medium" style={{ color: index === activeIndex ? 'var(--accent)' : 'var(--text)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-xs" style={{ color: index === activeIndex ? 'var(--text)' : 'var(--muted)' }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;