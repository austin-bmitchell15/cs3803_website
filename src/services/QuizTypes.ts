
export interface QnAType {
    question: string,
    codeSnippet: string | undefined,
    options: string[],
    answerOption: number,
    explanation: string
}

export type QuizType = QnAType[]