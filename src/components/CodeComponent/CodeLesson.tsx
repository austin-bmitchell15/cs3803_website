import CodeComponent from '@/components/CodeComponent/Code';
import { Snippet } from '@/utils/types';


interface CodeLessonProps {
    snippet: Snippet
}

export default function CodeLesson({snippet} : CodeLessonProps) {
    const packages = {
        official: ['numpy', 'pandas'],
    }

    return (
        <CodeComponent code={snippet.pythonCode} packages={packages}/>
    )
}