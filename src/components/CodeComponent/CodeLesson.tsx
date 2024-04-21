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
        <div className='flex flex-row'>
            <CodeComponent code={snippet.pythonTemplate} packages={packages}/>
        </div>
    )
}