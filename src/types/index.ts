export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  answers: Answer[];
  correctAnswers: number[]
}

export interface Answer {
  value: number;
  text: string;
}

export type QuestionType = "single" | "multiple";