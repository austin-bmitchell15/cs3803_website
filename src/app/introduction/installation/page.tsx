import VideoComponent from "@/components/Video";

// const videoUrl: string = "https://www.youtube.com/embed/A0_47vV3iSE?si=3KwIsOEOTx4X00Vd"
const videoId: string = "Zb--gCMwgfg";
const description: string = "Guide to installing tools for course";
const transcript: string = `Before we can get started with analyzing data, we’ll need to introduce you to various tools and how to download some of these tools to help you analyze data. 

At the base of all of this is Python. It's a language meant for programmers to be able to communicate with their computers and have their computers perform some tasks for them. In this case, it'll be what helps you analyze your data.  

Alongside Python, PyPI will be a great tool to help you get access to even smaller add-on tools. PyPI stands for Python Package Installer. It’s essentially a huge library of Python software and each of these Python software is referred to as “packages”. Developers from all around the world can upload their Python packages to PyPI so that others can download and use them in their own projects. These packages might do anything from handling dates and times, to creating complex data visualizations, to managing network requests. 

When you want to use these packages, you need to install them through pip. Pip is a tool that helps you install and manage these packages from PyPI. One unique aspect of Pip is that is exclusive to Python. 

To download Python, go to python.org/downloads/, or type the link shown on the screen. 
 

Add more script for download process, idk how the install wizard looks like 

Description + video visual portraying how to use pip commands? 
1. Direct user to Python website and direct them how to install Python: pip is part of base Python 
2. To download a package, use the command ‘pip install [package-name]’. 

Homebrew (macOS and Linux) and Chocolatey (Windows OS) 

To be able to use different packages and libraries, it is important to use special package management systems. For all of you Mac and Linux users, the one you will use is called brew. You can find the installer linked at the bottom of this video. From there, simply follow along the prompts.  For all of you Windows users, the one you will use is called Chocolatey. You can find the installer linked at the bottom of this video. From there, simply follow along the prompts.  

Once you have installed it you can work on accessing different folders and aspects through your terminal for Mac users and bash for Windows users. There are two main commands with this. The first is ls which lists everything in that folder. The second is navigating from folder to folder. This command is cd or change directory followed by the desired folders. But be careful, you can only do one folder at a time.  

Conda and Why Should You Use it 

When working with Python and its many libraries, it is important to manage “environments” to work in. Environments are the context that surrounds the code that we are executing. This context determines how the code is run, and what libraries are available for use. Having different environments allows you to work on multiple projects that require different contexts. We recommend that you create a new environment every time you are working on a project that may require a different “context” for the code you will write.  

This is where Conda comes in. Conda will help create and manage these environments for you.  `;

const moduleId: string = "intro";

export default function Installation() {
  return (
    <div className="ml-5 mt-5 w-full">
      <div className="flex justify-center w-full">
        <VideoComponent
          videoId={videoId}
          description={description}
          transcript={transcript}
          moduleId={moduleId}
        />
      </div>
    </div>
  );
}
