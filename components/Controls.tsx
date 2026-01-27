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
    <div className="fixed bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur border-t border-slate-800 px-4 py-3 md:p-4 flex justify-between items-center z-[100] text-slate-300 shadow-2xl">
      <div className="hidden sm:flex items-center gap-4 text-xs md:text-sm font-mono tracking-wider">
        <span>SLIDE {slideNumber + 1} / {totalSlides}</span>
      </div>

      <div className="flex items-center gap-4 flex-1 sm:flex-none justify-start sm:justify-center">
        <button 
          onClick={onToggleNotes}
          className={`px-3 py-2 md:px-4 md:py-2 rounded text-xs md:text-sm transition-colors font-semibold uppercase tracking-wide ${showNotes ? 'bg-blue-900 text-blue-200' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}
        >
          {showNotes ? 'Hide Notes' : 'Notes'}
        </button>
        {/* Mobile slide counter */}
        <span className="sm:hidden text-xs font-mono text-slate-500 ml-2">{slideNumber + 1}/{totalSlides}</span>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={onPrev}
          disabled={!canPrev}
          className={`p-3 md:p-4 rounded-full transition-all active:scale-95 ${!canPrev ? 'opacity-30 cursor-not-allowed bg-slate-800' : 'hover:bg-slate-700 active:bg-slate-600 bg-slate-800 text-white shadow-lg'}`}
          aria-label="Previous Slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={onNext}
          disabled={!canNext}
          className={`p-3 md:p-4 rounded-full transition-all active:scale-95 ${!canNext ? 'opacity-30 cursor-not-allowed bg-blue-500' : 'hover:bg-blue-600 active:bg-blue-700 bg-blue-600 text-white shadow-lg shadow-blue-900/50'}`}
          aria-label="Next Slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};