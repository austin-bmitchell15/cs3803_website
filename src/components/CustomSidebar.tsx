'use client';
import { CustomFlowbiteTheme, Sidebar, Checkbox, Label } from "flowbite-react";
import { useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';


const tableOfContents = {
  "modules": [
    {
      "title": "Introduction and Packages",
      "submodules": [
        {
          "name": "Introduction",
          "path": "/introduction/introduction"
        },
      ]
    }
  ]
}


export default function CustomSidebar() {

    const [introductionCompleteState, setIntroductionCompleteState] = useState(false)

    useEffect( () => {
        setIntroductionCompleteState(localStorage.getItem("introduction") == 'true' || false)

    }, [])

    return (
        <Sidebar className="h-full min-h-full w-auto">
            
          <Sidebar.Items>
          
            <Sidebar.ItemGroup>
            <Sidebar.Item className="mb-4">
              TABLE OF CONTENTS
            </Sidebar.Item>
            </Sidebar.ItemGroup>

            {/* Introduction */}
            <Sidebar.ItemGroup>
              <Sidebar.Item className="mb-3">
                Introduction and Packages
              </Sidebar.Item>
              <Sidebar.Item href="#">
                    <Checkbox checked disabled className="mr-2"  id="introduction" /> 
                    <Label htmlFor="introduction">Introduction</Label>
              </Sidebar.Item>
              <Sidebar.Item href="#">
                    <Checkbox disabled className="mr-2"  id="installation" /> 
                    <Label htmlFor="installation">Installation and Package Management</Label>
              </Sidebar.Item>

            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#">
                Introduction { introductionCompleteState ? <CheckIcon className="mb-1" /> : ""}
              </Sidebar.Item>
              <Sidebar.Collapse href="#" label="Package Management">
                <Sidebar.Item href="#">
                    Pip
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Brew
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Conda
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Mamba
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse href="#" label="Jupyter Notebook">
                <Sidebar.Item href="#">
                    Overview
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Usage
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse href="#" label="General Python">
                <Sidebar.Item href="#">
                    Import
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Variables
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Looping
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Lists
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Dictionaries
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Functions
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse href="#" label="Numpy">
                <Sidebar.Item href="#">
                    Overview
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Broadcasting
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Arrays and Shapes
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Useful Operations
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse href="#" label="Numpy">
                <Sidebar.Item href="#">
                    Overview
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Broadcasting
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Arrays and Shapes
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Useful Operations
                </Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      );
}