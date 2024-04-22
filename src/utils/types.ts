export interface Snippet {
    prompt: string
    pythonTemplate: string
    pythonExampleCode: string | undefined
    expectedOutput: string | undefined
    imageOutput: boolean
}