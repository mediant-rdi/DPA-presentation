import React, { useState } from 'react';
import { SlideContent, SlideType, QuizItem } from '../types';

interface Props {
  data: SlideContent;
}

const QuizCard: React.FC<{ item: QuizItem; index: number }> = ({ item, index }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className={`border-l-4 p-4 md:p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group ${revealed
          ? item.verdict === 'BREACH'
            ? 'bg-red-50 border-red-500'
            : 'bg-emerald-50 border-emerald-500'
          : 'bg-white border-slate-300 hover:border-blue-500 hover:shadow-md'
        }`}
      onClick={() => setRevealed(true)}
    >
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className="text-slate-400 text-xs sm:text-sm font-serif uppercase tracking-widest">Scenario {index + 1}</span>
        {revealed ? (
          <span className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wider border ${item.verdict === 'BREACH'
              ? 'text-red-700 border-red-200 bg-red-100'
              : 'text-emerald-700 border-emerald-200 bg-emerald-100'
            }`}>
            {item.verdict}
          </span>
        ) : (
          <span className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
            Click to Reveal
          </span>
        )}
      </div>

      <p className="text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed mb-4 relative z-10">
        {item.scenario}
      </p>

      {revealed && (
        <div className="pt-4 mt-2 border-t border-slate-200 animate-fade-in relative z-10">
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
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
        <div className="flex flex-col justify-center items-center min-h-full text-center space-y-6 md:space-y-12 relative py-10">
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-800"></div>
          <div className="space-y-4 md:space-y-8 max-w-5xl">
            <h2 className="text-emerald-800 font-bold tracking-[0.2em] text-sm sm:text-base md:text-xl uppercase">Annual General Meeting</h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-tight">
              {data.title}
            </h1>
            <div className="w-24 md:w-48 h-1 md:h-2 bg-blue-800 mx-auto"></div>
            <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-500 font-light italic font-serif leading-tight">{data.subtitle}</p>
          </div>
          {data.mainText && <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-3xl font-light leading-relaxed">{data.mainText}</p>}
        </div>
      );

    case SlideType.SECTION_TITLE:
      return (
        <div className="flex flex-col justify-center min-h-full pl-4 sm:pl-8 md:pl-16 border-l-[8px] sm:border-l-[16px] border-emerald-900 py-10">
          <h2 className="text-emerald-700 font-bold tracking-widest text-base sm:text-lg md:text-xl uppercase mb-4 sm:mb-6">New Section</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 mb-6 sm:mb-10 leading-tight">{data.title}</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-900 font-serif italic mb-8 sm:mb-12">{data.subtitle}</p>
          {data.mainText && <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-4xl leading-relaxed">{data.mainText}</p>}
        </div>
      );

    case SlideType.BIG_NUMBER:
      return (
        <div className="flex flex-col justify-center items-center min-h-full text-center space-y-12 md:space-y-20 py-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800">{data.title}</h2>
          <div className="relative p-8 md:p-16">
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-10 sm:h-10 border-t-2 border-l-2 border-emerald-600"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-10 sm:h-10 border-b-2 border-r-2 border-emerald-600"></div>
            <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif text-emerald-900 mb-4 tracking-tighter leading-none">
              {data.highlightStat}
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-800 font-medium uppercase tracking-widest">
              {data.highlightText}
            </span>
          </div>
          <ul className="space-y-4 sm:space-y-6 text-left inline-block max-w-4xl">
            {data.bullets?.map((b, i) => (
              <li key={i} className="flex items-start text-slate-600 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-600 mt-2.5 sm:mt-3.5 mr-4 sm:mr-6 flex-shrink-0"></span>
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
        </div>
      );

    case SlideType.TWO_COLUMN:
      return (
        <div className="min-h-full flex flex-col py-6">
          <div className="mb-8 md:mb-14 border-b border-slate-200 pb-6 md:pb-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-slate-900 mb-3 sm:mb-5">{data.title}</h2>
            {data.subtitle && <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-emerald-800 italic font-serif">{data.subtitle}</p>}
            {data.mainText && <p className="text-slate-600 mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-5xl leading-relaxed">{data.mainText}</p>}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
            <div className="pr-0 lg:pr-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 md:mb-8 font-serif flex items-center">
                <span className="w-8 h-px bg-blue-900 mr-4"></span>
                {data.columns?.leftTitle}
              </h3>
              <ul className="space-y-6 md:space-y-8">
                {data.columns?.leftContent.map((item, i) => (
                  <li key={i} className="flex items-start text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed group">
                    <span className="text-blue-400 mr-4 text-sm sm:text-lg mt-1.5 font-bold transition-transform group-hover:translate-x-1">0{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-6 md:p-10 border-l border-emerald-100 rounded-lg lg:rounded-none">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 mb-6 md:mb-8 font-serif flex items-center">
                <span className="w-8 h-px bg-emerald-900 mr-4"></span>
                {data.columns?.rightTitle}
              </h3>
              <ul className="space-y-6 md:space-y-8">
                {data.columns?.rightContent.map((item, i) => (
                  <li key={i} className="flex items-start text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed group">
                    <span className="text-emerald-400 mr-4 text-sm sm:text-lg mt-1.5 font-bold transition-transform group-hover:translate-x-1">0{i + 1}</span>
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
        <div className="min-h-full flex flex-col py-6">
          <div className="mb-10 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-slate-900 mb-4 sm:mb-6">{data.title}</h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-800 font-serif italic mb-6 sm:mb-8">{data.subtitle}</p>
            {data.mainText && <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed">{data.mainText}</p>}
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-8 sm:space-y-12 max-w-6xl mx-auto w-full">
            {data.steps?.map((step, i) => (
              <div key={i} className="flex items-start sm:items-center group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-emerald-900 text-emerald-900 flex items-center justify-center font-serif text-xl sm:text-3xl mr-6 sm:mr-10 bg-white z-10 relative transition-colors group-hover:bg-emerald-900 group-hover:text-white rounded-full sm:rounded-none">
                  {i + 1}
                </div>
                <div className="border-b border-slate-200 pb-6 sm:pb-8 flex-1 group-hover:border-emerald-200 transition-colors">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-4 font-serif">{step.title}</h4>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case SlideType.INTERACTIVE_QUIZ:
      return (
        <div className="min-h-full flex flex-col py-6">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-4 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900">{data.title}</h2>
              <p className="text-lg sm:text-xl md:text-2xl text-emerald-800 mt-2 font-serif italic">{data.subtitle}</p>
            </div>
            <div className="text-slate-400 text-xs sm:text-sm md:text-base">Click cards to reveal answers</div>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pb-4">
            {data.quizItems?.map((item, i) => (
              <QuizCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      );

    case SlideType.GRID_CARDS:
      return (
        <div className="min-h-full flex flex-col py-6">
          <div className="mb-10 sm:mb-14 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-slate-900 mb-3 sm:mb-5">{data.title}</h2>
            {data.subtitle && <p className="text-lg sm:text-2xl md:text-3xl text-emerald-800 italic font-serif">{data.subtitle}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-stretch">
            {data.cards?.map((card, i) => (
              <div key={i} className="bg-white border-t-4 border-emerald-900 p-6 md:p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-slate-900 mb-4 sm:mb-8">{card.title}</h3>
                <ul className="space-y-4 md:space-y-6 flex-1">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
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
        <div className="flex flex-col justify-center items-center min-h-full text-center space-y-10 sm:space-y-16 py-10">
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 border-emerald-900 flex items-center justify-center rounded-full mb-4">
            <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-slate-900">{data.title}</h2>

          <div className="max-w-4xl">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-emerald-800 italic mb-6 sm:mb-10">"{data.highlightText}"</p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-600 mb-8">{data.mainText}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 border-t border-slate-200 pt-8">
            {data.bullets?.map((b, i) => (
              <div key={i} className="text-left">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-1 sm:mb-2">Resource</p>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-medium">{b}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case SlideType.CASE_STUDY:
      return (
        <div className="min-h-full flex flex-col py-6">
          <div className="mb-8 border-b border-slate-200 pb-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-slate-900 mb-2">{data.title}</h2>
            {data.subtitle && <p className="text-xl sm:text-2xl md:text-3xl text-emerald-800 italic font-serif">{data.subtitle}</p>}
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8">
              <section className="bg-blue-50 p-6 border-l-4 border-blue-500 rounded-r-lg">
                <h3 className="text-blue-900 font-bold uppercase tracking-wider text-sm mb-3">The Scenario</h3>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed italic">
                  "{data.caseStudy?.scenario}"
                </p>
              </section>

              <section>
                <h3 className="text-emerald-900 font-bold uppercase tracking-wider text-sm mb-4">What Happened</h3>
                <ul className="space-y-3">
                  {data.caseStudy?.whatHappened.map((item, i) => (
                    <li key={i} className="flex items-start text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                      <span className="text-emerald-600 mr-3 mt-1.5">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <section className="bg-red-50 p-6 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-red-900 font-bold uppercase tracking-wider text-sm mb-4">Red Flags Missed</h3>
                <ul className="space-y-3">
                  {data.caseStudy?.redFlags.map((item, i) => (
                    <li key={i} className="flex items-start text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                      <span className="text-red-600 mr-3 mt-1.5">⚠</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-emerald-900 p-6 text-white rounded-lg shadow-lg">
                <h3 className="text-emerald-300 font-bold uppercase tracking-wider text-sm mb-3">Key Lesson</h3>
                <p className="text-lg sm:text-xl md:text-2xl font-serif leading-relaxed italic">
                  {data.caseStudy?.lesson}
                </p>
              </section>
            </div>
          </div>
        </div>
      );

    case SlideType.CONTENT_SLIDE:
    default: // BULLET_LIST fallback
      return (
        <div className="min-h-full flex flex-col justify-center max-w-5xl mx-auto py-10">
          <div className="mb-10 sm:mb-16 border-l-4 sm:border-l-8 border-emerald-900 pl-6 sm:pl-10">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-slate-900 mb-4">{data.title}</h2>
            {data.subtitle && <p className="text-2xl sm:text-3xl md:text-4xl text-blue-900 italic font-serif">{data.subtitle}</p>}
          </div>

          <ul className="space-y-6 sm:space-y-10">
            {data.bullets?.map((b, i) => (
              <li key={i} className="flex items-start text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-700 leading-relaxed font-light">
                <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-emerald-900 mt-3 sm:mt-4 mr-6 sm:mr-8 flex-shrink-0"></span>
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
        </div>
      );
  }
};