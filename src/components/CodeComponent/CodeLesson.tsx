import CodeComponent from '@/components/CodeComponent/Code';
import { AAPLData } from '@/data/APPLE';
import { Snippet } from '@/utils/types';


interface CodeLessonProps {
    snippet: Snippet
}

export default function CodeLesson({snippet} : CodeLessonProps) {
    const packages = {
        official: ['numpy', 'pandas', 'matplotlib'],
    }

    return (
        <div className='flex flex-row'>
            <CodeComponent code={snippet.pythonTemplate} packages={packages} data={AAPLData}/>
        </div>
    )
}