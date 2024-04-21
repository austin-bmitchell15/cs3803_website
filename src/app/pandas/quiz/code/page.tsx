'use client'
import CodeComponent from "@/components/CodeComponent/Code";
import CodeLesson from "@/components/CodeComponent/CodeLesson";
import SubmoduleContainer from "@/components/SubmoduleContainer";
import { PandaSnippets } from "@/data/Pandas/PandaSnippets";
import { useState } from "react";

export default function NumpyCode() {
    const snippet = PandaSnippets

    return (
        <SubmoduleContainer title='Basic Operation Quiz' onNextClick={() => console.log('next')} onPrevClick={() => console.log('prev')}>
            <CodeLesson snippet={snippet}/>
        </SubmoduleContainer>
    )
}
