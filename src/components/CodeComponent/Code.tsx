'useClient'
import React, { useEffect, useState } from 'react'

import { usePython } from 'react-py'
import { Packages } from 'react-py/dist/types/Packages'
import Controls from './Controls'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { TextInput } from 'flowbite-react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import Input from './Input'

const editorOptions = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  highlightActiveLine: false,
  showPrintMargin: false
}

const editorOnLoad = (editor : any) => {
  editor.renderer.setScrollMargin(10, 10, 0, 0)
  editor.moveCursorTo(0, 0)
}

interface CodeEditorProps {
  code: string
  packages?: Packages
}

export default function CodeEditor(props: CodeEditorProps) {
  const { code, packages } = props
  const [input, setInput] = useState(code.trimEnd())
  const [showOutput, setShowOutput] = useState(false)


  useEffect(() => {
    setInput(code.trimEnd())
    setShowOutput(false)
  }, [code])

  const {
    runPython,
    stdout,
    stderr,
    isLoading,
    isRunning,
    interruptExecution,
    isAwaitingInput,
    sendInput,
    prompt
  } = usePython({ packages })

  function run() {
    runPython(input)
    setShowOutput(true)
  }

  function stop() {
    interruptExecution()
    setShowOutput(false)
  }

  function reset() {
    setShowOutput(false)
    setInput(code.trimEnd())
  }

  return (
    <div className="min-w-500px relative mb-10 flex flex-col">
      <Controls
        items={[
          {
            label: 'Run',
            icon: PlayArrowIcon,
            onClick: run,
            disabled: isLoading || isRunning,
            hidden: isRunning
          },
          { label: 'Stop', icon: StopIcon, onClick: stop, hidden: !isRunning },
          {
            label: 'Reset',
            icon: AutorenewIcon,
            onClick: reset,
            disabled: isRunning
          }
        ]}
        isAwaitingInput={isAwaitingInput}
      />
      <AceEditor
        value={input}
        mode="python"
        name="CodeBlock"
        fontSize="0.9rem"
        className="min-h-[40rem] min-w-[40rem] overflow-clip rounded shadow-md"
        theme='one_dark'
        onChange={(newValue) => setInput(newValue)}
        width="100%"
        maxLines={Infinity}
        onLoad={editorOnLoad}
        editorProps={{ $blockScrolling: true }}
        setOptions={editorOptions}
      />

      {isAwaitingInput && <Input prompt={prompt} onSubmit={sendInput} />}

      {showOutput && (
        <pre className="mt-4 text-left">
          <code>{stdout}</code>
          <code className="text-red-500">{stderr}</code>
        </pre>
      )}
    </div>
  )
}