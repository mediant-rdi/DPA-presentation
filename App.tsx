import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './data/slides';
import { Slide } from './components/Slide';
import { Controls } from './components/Controls';
import { ProgressBar } from './components/ProgressBar';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

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
    <div className="h-screen w-screen flex flex-col bg-emerald-950 text-slate-100 overflow-hidden relative">
      <ProgressBar current={currentSlideIndex} total={slides.length} />
      
      <main className="flex-1 overflow-hidden relative pb-20 flex justify-center items-center"> 
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
