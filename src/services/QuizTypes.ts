
export interface QnAType {
    question: string,
    codeSnippet?: string,
    options: string[],
    answerOption: number,
    explanation: string
}

export type QuizType = QnAType[]