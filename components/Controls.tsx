import React from 'react';

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
  canNext: boolean;
  canPrev: boolean;
  slideNumber: number;
  totalSlides: number;
}

export const Controls: React.FC<ControlsProps> = ({ 
  onNext, 
  onPrev, 
  onToggleNotes, 
  showNotes, 
  canNext, 
  canPrev,
  slideNumber,
  totalSlides
}) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur border-t border-slate-800 p-4 flex justify-between items-center z-40 text-slate-300">
      <div className="flex items-center gap-4 text-sm font-mono">
        <span>SLIDE {slideNumber + 1} / {totalSlides}</span>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleNotes}
          className={`px-4 py-2 rounded text-sm transition-colors ${showNotes ? 'bg-blue-900 text-blue-200' : 'hover:bg-slate-800'}`}
        >
          {showNotes ? 'Hide Notes' : 'Speaker Notes'}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={onPrev}
          disabled={!canPrev}
          className={`p-3 rounded-full transition-all ${!canPrev ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-700 active:bg-slate-600 bg-slate-800'}`}
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={onNext}
          disabled={!canNext}
          className={`p-3 rounded-full transition-all ${!canNext ? 'opacity-30 cursor-not-allowed' : 'hover:bg-blue-600 active:bg-blue-700 bg-blue-500 text-white'}`}
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};
