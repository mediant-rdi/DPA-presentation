import React from 'react';
import { SlideContent } from '../types';
import { SlideContentRenderer } from './SlideContentRenderer';

interface SlideProps {
  data: SlideContent;
  showNotes: boolean;
}

export const Slide: React.FC<SlideProps> = ({ data, showNotes }) => {
  return (
    <div className="flex flex-col h-full w-full max-w-[1600px] mx-auto p-0 md:p-8">
      {/* Slide Card - Removed heavy shadow/rounding for a cleaner, paper-like feel */}
      <div className="flex-1 bg-slate-50 relative flex flex-col transition-all duration-300 md:shadow-xl md:border md:border-slate-200">
        <div className="flex-1 p-8 md:p-16 overflow-y-auto custom-scrollbar">
          <SlideContentRenderer data={data} />
        </div>
        
        {/* Footnotes */}
        {data.footnotes && (
          <div className="bg-white px-8 md:px-16 py-4 border-t border-slate-100 flex gap-6 text-xs text-slate-400 font-serif">
            {data.footnotes.map((fn, i) => (
              <span key={i} className="flex items-center">
                 <span className="mr-1">*</span> {fn}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Speaker Notes Panel */}
      {showNotes && (
        <div 
          className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-6 shadow-lg text-slate-800 animate-fade-in-up max-h-48 overflow-y-auto"
        >
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            <h4 className="text-xs font-bold text-yellow-700 uppercase tracking-widest">Speaker Script</h4>
          </div>
          <div 
            className="prose prose-sm max-w-none font-serif leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.speakerNotes }} 
          />
        </div>
      )}
    </div>
  );
};
