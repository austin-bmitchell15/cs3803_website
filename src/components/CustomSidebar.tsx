'use client';
import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';

export default function CustomSidebar() {

    const [introductionCompleteState, setIntroductionCompleteState] = useState(false)

    useEffect( () => {
        setIntroductionCompleteState(localStorage.getItem("introduction") == 'true' || false)

    }, [])
    return (
        <Sidebar className="h-full min-h-full w-auto">
          <Sidebar.Items>
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