export enum SlideType {
  TITLE = 'TITLE',
  SECTION_TITLE = 'SECTION_TITLE',
  BULLET_LIST = 'BULLET_LIST',
  BIG_NUMBER = 'BIG_NUMBER',
  TWO_COLUMN = 'TWO_COLUMN',
  INTERACTIVE_QUIZ = 'INTERACTIVE_QUIZ',
  PROCESS_FLOW = 'PROCESS_FLOW',
  GRID_CARDS = 'GRID_CARDS',
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
  footnotes?: string[];
  speakerNotes: string; // HTML allowed for formatting
}
