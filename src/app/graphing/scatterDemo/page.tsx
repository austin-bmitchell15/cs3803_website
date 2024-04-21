'use client'
import CodeComponent from "@/components/CodeComponent/Code";
import CodeLesson from "@/components/CodeComponent/CodeLesson";
import SubmoduleContainer from "@/components/SubmoduleContainer";
import { LinegraphsDemoSnippets } from "@/data/Graphing/lineGraphsDemoSnippets";
import { useState } from "react";
import { ScatterDemoSnippets } from "@/data/Graphing/ScatterDemoSnippets";

export default function NumpyCode() {
    const snippet = ScatterDemoSnippets

    return (
        <SubmoduleContainer>
            <CodeLesson snippet={snippet}/>
        </SubmoduleContainer>
    )
}