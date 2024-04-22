"use client";
import { Button, Timeline } from "flowbite-react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { MdOndemandVideo, MdOutlineQuiz } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

export default function CustomTimeline() {
  return (
    <Timeline horizontal className="flex-grow flex justify-evenly">
      <Timeline.Item>
        <Timeline.Point icon={MdOndemandVideo} className="flex-grow" />
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={MdOutlineQuiz} className="flex-grow" />
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={FaCode} className="flex-grow" />
      </Timeline.Item>
    </Timeline>
  );
}
