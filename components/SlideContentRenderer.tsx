import React, { useState } from 'react';
import { SlideContent, SlideType, QuizItem } from '../types';

interface Props {
  data: SlideContent;
}

const QuizCard: React.FC<{ item: QuizItem; index: number }> = ({ item, index }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div 
      className={`border-l-4 p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group ${
        revealed 
          ? item.verdict === 'BREACH' 
            ? 'bg-red-50 border-red-500' 
            : 'bg-emerald-50 border-emerald-500' 
          : 'bg-white border-slate-300 hover:border-blue-500 hover:shadow-md'
      }`}
      onClick={() => setRevealed(true)}
    >
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className="text-slate-400 text-xs font-serif uppercase tracking-widest">Scenario {index + 1}</span>
        {revealed ? (
          <span className={`px-4 py-1 text-xs font-bold uppercase tracking-wider border ${
            item.verdict === 'BREACH' 
              ? 'text-red-700 border-red-200 bg-red-100' 
              : 'text-emerald-700 border-emerald-200 bg-emerald-100'
          }`}>
            {item.verdict}
          </span>
        ) : (
          <span className="text-blue-600 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            Click to Reveal
          </span>
        )}
      </div>
      
      <p className="text-slate-800 text-lg md:text-xl font-serif leading-relaxed mb-4 relative z-10">
        {item.scenario}
      </p>
      
      {revealed && (
        <div className="pt-4 mt-2 border-t border-slate-200 animate-fade-in relative z-10">
          <p className="text-slate-600 text-sm font-medium leading-relaxed">
            <span className="font-bold text-slate-800 mr-2">Analysis:</span>
            {item.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export const SlideContentRenderer: React.FC<Props> = ({ data }) => {
  switch (data.type) {
    case SlideType.TITLE:
      return (
        <div className="flex flex-col justify-center items-center h-full text-center space-y-10 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-800"></div>
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-emerald-800 font-bold tracking-[0.2em] text-sm uppercase">Annual General Meeting</h2>
            <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-tight">
              {data.title}
            </h1>
            <div className="w-32 h-1 bg-blue-800 mx-auto"></div>
            <p className="text-2xl md:text-3xl text-slate-500 font-light italic font-serif">{data.subtitle}</p>
          </div>
          {data.mainText && <p className="text-lg text-slate-600 max-w-2xl font-light">{data.mainText}</p>}
        </div>
      );

    case SlideType.SECTION_TITLE:
      return (
        <div className="flex flex-col justify-center h-full pl-8 md:pl-16 border-l-[16px] border-emerald-900">
          <h2 className="text-emerald-700 font-bold tracking-widest text-lg uppercase mb-4">New Section</h2>
          <h1 className="text-6xl md:text-7xl font-serif text-slate-900 mb-8 leading-tight">{data.title}</h1>
          <p className="text-3xl text-blue-900 font-serif italic mb-8">{data.subtitle}</p>
          {data.mainText && <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">{data.mainText}</p>}
        </div>
      );

    case SlideType.BIG_NUMBER:
      return (
        <div className="flex flex-col justify-center items-center h-full text-center space-y-16">
           <h2 className="text-4xl font-serif text-slate-800">{data.title}</h2>
           <div className="relative p-12">
             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-600"></div>
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-600"></div>
             <span className="block text-8xl md:text-9xl font-serif text-emerald-900 mb-4 tracking-tighter">
               {data.highlightStat}
             </span>
             <span className="text-xl md:text-2xl text-blue-800 font-medium uppercase tracking-widest">
               {data.highlightText}
             </span>
           </div>
           <ul className="space-y-4 text-left inline-block max-w-3xl">
             {data.bullets?.map((b, i) => (
               <li key={i} className="flex items-start text-slate-600 text-lg leading-relaxed">
                 <span className="w-1.5 h-1.5 bg-emerald-600 mt-2.5 mr-4 flex-shrink-0"></span>
                 <span dangerouslySetInnerHTML={{ __html: b }} />
               </li>
             ))}
           </ul>
        </div>
      );

    case SlideType.TWO_COLUMN:
      return (
        <div className="h-full flex flex-col">
          <div className="mb-10 border-b border-slate-200 pb-6">
            <h2 className="text-5xl font-serif text-slate-900 mb-3">{data.title}</h2>
            {data.subtitle && <p className="text-2xl text-emerald-800 italic font-serif">{data.subtitle}</p>}
            {data.mainText && <p className="text-slate-600 mt-4 text-lg max-w-4xl">{data.mainText}</p>}
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="pr-4">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 font-serif flex items-center">
                <span className="w-8 h-px bg-blue-900 mr-4"></span>
                {data.columns?.leftTitle}
              </h3>
              <ul className="space-y-6">
                {data.columns?.leftContent.map((item, i) => (
                  <li key={i} className="flex items-start text-lg text-slate-700 leading-relaxed group">
                    <span className="text-blue-400 mr-4 text-xs mt-1.5 font-bold transition-transform group-hover:translate-x-1">0{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8 border-l border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 font-serif flex items-center">
                <span className="w-8 h-px bg-emerald-900 mr-4"></span>
                {data.columns?.rightTitle}
              </h3>
              <ul className="space-y-6">
                {data.columns?.rightContent.map((item, i) => (
                  <li key={i} className="flex items-start text-lg text-slate-700 leading-relaxed group">
                     <span className="text-emerald-400 mr-4 text-xs mt-1.5 font-bold transition-transform group-hover:translate-x-1">0{i + 1}</span>
                     <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );

    case SlideType.PROCESS_FLOW:
      return (
        <div className="h-full flex flex-col">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-serif text-slate-900 mb-4">{data.title}</h2>
            <p className="text-xl text-blue-800 font-serif italic mb-6">{data.subtitle}</p>
            {data.mainText && <p className="text-lg text-slate-500 max-w-3xl mx-auto">{data.mainText}</p>}
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-8 max-w-5xl mx-auto w-full">
            {data.steps?.map((step, i) => (
              <div key={i} className="flex items-center group">
                 <div className="flex-shrink-0 w-16 h-16 border-2 border-emerald-900 text-emerald-900 flex items-center justify-center font-serif text-2xl mr-8 bg-white z-10 relative transition-colors group-hover:bg-emerald-900 group-hover:text-white">
                   {i + 1}
                 </div>
                 <div className="border-b border-slate-200 pb-8 flex-1 group-hover:border-emerald-200 transition-colors">
                   <h4 className="text-xl font-bold text-slate-900 mb-2 font-serif">{step.title}</h4>
                   <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      );

    case SlideType.INTERACTIVE_QUIZ:
      return (
        <div className="h-full flex flex-col">
          <div className="mb-8 flex items-end justify-between border-b border-slate-200 pb-4">
             <div>
                <h2 className="text-4xl font-serif text-slate-900">{data.title}</h2>
                <p className="text-lg text-emerald-800 mt-2 font-serif italic">{data.subtitle}</p>
             </div>
             <div className="text-slate-400 text-sm">Click cards to reveal answers</div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pb-4">
            {data.quizItems?.map((item, i) => (
              <QuizCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      );

    case SlideType.GRID_CARDS:
      return (
        <div className="h-full flex flex-col">
           <div className="mb-10 text-center">
            <h2 className="text-5xl font-serif text-slate-900 mb-3">{data.title}</h2>
            {data.subtitle && <p className="text-xl text-emerald-800 italic font-serif">{data.subtitle}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 items-stretch">
            {data.cards?.map((card, i) => (
              <div key={i} className="bg-white border-t-4 border-emerald-900 p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-serif text-slate-900 mb-6">{card.title}</h3>
                <ul className="space-y-4 flex-1">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start text-sm text-slate-600 leading-relaxed">
                      <span className="text-emerald-500 mr-3 text-lg leading-none">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case SlideType.CLOSING:
      return (
        <div className="flex flex-col justify-center items-center h-full text-center space-y-12">
          <div className="w-24 h-24 border-4 border-emerald-900 flex items-center justify-center rounded-full mb-4">
            <svg className="w-12 h-12 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif text-slate-900">{data.title}</h2>
          
          <div className="max-w-2xl">
            <p className="text-3xl font-serif text-emerald-800 italic mb-8">"{data.highlightText}"</p>
            <p className="text-xl text-slate-600 mb-8">{data.mainText}</p>
          </div>

           <div className="flex flex-col md:flex-row gap-8 mt-8 border-t border-slate-200 pt-8">
             {data.bullets?.map((b, i) => (
               <div key={i} className="text-left">
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Resource</p>
                  <p className="text-lg text-slate-800 font-medium">{b}</p>
               </div>
             ))}
           </div>
        </div>
      );

    default: // BULLET_LIST fallback
      return (
        <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
          <div className="mb-12 border-l-4 border-emerald-900 pl-6">
            <h2 className="text-5xl font-serif text-slate-900 mb-2">{data.title}</h2>
            {data.subtitle && <p className="text-2xl text-blue-900 italic font-serif">{data.subtitle}</p>}
          </div>
          
          <ul className="space-y-8">
            {data.bullets?.map((b, i) => (
              <li key={i} className="flex items-start text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                <span className="inline-block w-2 h-2 bg-emerald-900 mt-3.5 mr-6 flex-shrink-0"></span>
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
        </div>
      );
  }
};
