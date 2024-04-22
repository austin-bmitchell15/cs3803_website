"use client";
import CodeComponent from "@/components/CodeComponent/Code";
import CodeLesson from "@/components/CodeComponent/CodeLesson";
import SubmoduleContainer from "@/components/SubmoduleContainer";
import { HistogramDemoSnippets } from "@/data/Graphing/HistogramDemoSnippets";
import { PandaSnippets } from "@/data/Pandas/PandaSnippets";
import { useState } from "react";

export default function NumpyCode() {
  const snippet = HistogramDemoSnippets;

  return <CodeLesson snippet={snippet} moduleId="graphing_histogramdemo"/>;
}
