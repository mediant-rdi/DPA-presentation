import React, { useState, useEffect, useCallback } from 'react';
import { slides as agmSlides } from './data/slides';
import { generalSlides } from './data/generalSlides';
import { Slide } from './components/Slide';
import { Controls } from './components/Controls';
import { ProgressBar } from './components/ProgressBar';

const App: React.FC = () => {
  // Simple router logic
  const getSlidesBasedOnRoute = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    // Check for /general in path or #/general in hash
    if (path.includes('/general') || hash.includes('/general')) {
      return generalSlides;
    }
    return agmSlides;
  };

  const [slides, setSlides] = useState(getSlidesBasedOnRoute());
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  // Listen for popstate to handle browser back/forward if we used pushState (not implemented here but good practice)
  useEffect(() => {
    const handlePopState = () => {
      setSlides(getSlidesBasedOnRoute());
      setCurrentSlideIndex(0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    // Use h-[100dvh] for mobile browsers to correctly handle address bar height
    <div className="h-[100dvh] w-screen flex flex-col bg-emerald-950 text-slate-100 overflow-hidden relative">
      <ProgressBar current={currentSlideIndex} total={slides.length} />
      
      <main className="flex-1 overflow-hidden relative pb-[80px] md:pb-[100px] flex justify-center items-center"> 
        <Slide 
          data={slides[currentSlideIndex]} 
          showNotes={showNotes} 
        />
      </main>

      <Controls 
        onNext={nextSlide}
        onPrev={prevSlide}
        onToggleNotes={() => setShowNotes(!showNotes)}
        showNotes={showNotes}
        canNext={currentSlideIndex < slides.length - 1}
        canPrev={currentSlideIndex > 0}
        slideNumber={currentSlideIndex}
        totalSlides={slides.length}
      />
    </div>
  );
};

export default App;
