"use client"

import { useEffect, useState } from "react"
import { Button } from 'flowbite-react';
import CheckIcon from '@mui/icons-material/Check';

export default function IntroductionPage() {
    const [completionStatus, setCompletionStatus] = useState(false)

    useEffect(() => {
        setCompletionStatus(
            localStorage.getItem("introduction") == 'true' || false
        )
    }, [])

    function complete() {
        setCompletionStatus(!completionStatus)
        localStorage.setItem("introduction", completionStatus.toString())
        console.log("COmpletion Status right now %s", completionStatus)
    }
    return (
        <>
            <Button color={completionStatus ? 'green' : 'gray'} onClick={complete}>
                <CheckIcon className="mr-3 h-4 w-4" />
                Complete
            </Button>

            <p>Course Status: {completionStatus ? "True" : "False"}</p>
        </>
    )
}