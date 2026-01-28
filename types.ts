export enum SlideType {
  TITLE = 'TITLE',
  SECTION_TITLE = 'SECTION_TITLE',
  BULLET_LIST = 'BULLET_LIST',
  BIG_NUMBER = 'BIG_NUMBER',
  TWO_COLUMN = 'TWO_COLUMN',
  INTERACTIVE_QUIZ = 'INTERACTIVE_QUIZ',
  PROCESS_FLOW = 'PROCESS_FLOW',
  GRID_CARDS = 'GRID_CARDS',
  CASE_STUDY = 'CASE_STUDY',
  CONTENT_SLIDE = 'CONTENT_SLIDE',
  CLOSING = 'CLOSING'
}

export interface QuizItem {
  scenario: string;
  verdict: 'BREACH' | 'SAFE';
  explanation: string;
}

export interface SlideContent {
  title: string;
  subtitle?: string;
  type: SlideType;
  image?: string;
  bullets?: string[];
  mainText?: string;
  highlightStat?: string;
  highlightText?: string;
  columns?: {
    leftTitle?: string;
    leftContent: string[];
    rightTitle?: string;
    rightContent: string[];
  };
  quizItems?: QuizItem[];
  steps?: { title: string; desc: string }[];
  cards?: { title: string; items: string[] }[];
  caseStudy?: {
    scenario: string;
    whatHappened: string[];
    redFlags: string[];
    lesson: string;
  };
  footnotes?: string[];
  speakerNotes: string; // HTML allowed for formatting
}
