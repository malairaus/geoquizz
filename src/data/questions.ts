import { normalDrafts, type DraftQuestion } from './normalQuestions';
import { competitiveDrafts } from './competitiveQuestions';
import { olympicDrafts } from './olympicQuestions';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type Difficulty = 'normal' | 'competitiv' | 'olimpic';

export interface DifficultyInfo {
  key: Difficulty;
  label: string;
  description: string;
  color: string;
  bgGradient: string;
  shadowColor: string;
  borderColor: string;
}

export const QUESTIONS_PER_QUIZ = 20;
export const QUESTIONS_PER_LEVEL = 100;

export const difficulties: DifficultyInfo[] = [
  {
    key: 'normal',
    label: 'Normal',
    description: '20 de intrebari alese aleatoriu din 100 de intrebari distincte de baza.',
    color: 'text-sky-600',
    bgGradient: 'from-sky-500 to-teal-500',
    shadowColor: 'shadow-sky-200',
    borderColor: 'border-sky-200',
  },
  {
    key: 'competitiv',
    label: 'Competitiv',
    description: '20 de intrebari alese aleatoriu din 100 de intrebari distincte mediu-avansate.',
    color: 'text-amber-600',
    bgGradient: 'from-amber-500 to-orange-500',
    shadowColor: 'shadow-amber-200',
    borderColor: 'border-amber-200',
  },
  {
    key: 'olimpic',
    label: 'Olimpic',
    description: '20 de intrebari alese aleatoriu din 100 de intrebari distincte avansate.',
    color: 'text-rose-600',
    bgGradient: 'from-rose-500 to-red-600',
    shadowColor: 'shadow-rose-200',
    borderColor: 'border-rose-200',
  },
];

const repeatedNormalIndexes = new Set([
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
  43, 44, 45, 46, 47,
]);

const curatedNormalDrafts = normalDrafts.filter(
  (_, index) => !repeatedNormalIndexes.has(index)
);

function makeQuestion(draft: DraftQuestion, id: number): Question {
  const options = shuffleOptions([draft.correct, ...draft.wrong], id);

  return {
    id,
    text: draft.text,
    options,
    correctIndex: options.indexOf(draft.correct),
    explanation: draft.explanation,
  };
}

function makeQuestions(drafts: DraftQuestion[], offset: number): Question[] {
  const selectedDrafts = drafts.slice(0, QUESTIONS_PER_LEVEL);

  if (selectedDrafts.length !== QUESTIONS_PER_LEVEL) {
    console.warn(`Expected ${QUESTIONS_PER_LEVEL} questions, received ${selectedDrafts.length}.`);
  }

  return selectedDrafts.map((draft, index) => makeQuestion(draft, offset + index + 1));
}

function shuffleItems<T>(items: T[]): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function shuffleOptions(options: string[], seed: number): string[] {
  return [...options].sort((a, b) => {
    const left = Math.sin((seed + a.length) * 999) * 10000;
    const right = Math.sin((seed + b.length) * 999) * 10000;
    return (left - Math.floor(left)) - (right - Math.floor(right));
  });
}

const questionBanks: Record<Difficulty, Question[]> = {
  normal: makeQuestions(curatedNormalDrafts, 0),
  competitiv: makeQuestions(competitiveDrafts, 1000),
  olimpic: makeQuestions(olympicDrafts, 2000),
};

export function getQuestionBankByDifficulty(difficulty: Difficulty): Question[] {
  return questionBanks[difficulty];
}

export function getQuestionsByDifficulty(difficulty: Difficulty): Question[] {
  return shuffleItems(questionBanks[difficulty]).slice(0, QUESTIONS_PER_QUIZ);
}
