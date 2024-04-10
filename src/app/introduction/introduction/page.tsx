"use client"

import { saveSubmoduleStatus } from "@/services/ModuleStatusStorage";
import SubmoduleContainer from "@/components/SubmoduleContainer";
import CustomTimeline from '../../../components/CustomTimeline';


export default function IntroductionSubmodule() {
  function func() {
    saveSubmoduleStatus('jupyter_purpose')
  }
  return (
    <SubmoduleContainer title={"Introduction"} onPrevClick={()=> console.log("prev")} onNextClick={() => console.log("next")}>
        <CustomTimeline/>
    </SubmoduleContainer>
  );
}
