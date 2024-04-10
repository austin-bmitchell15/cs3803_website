import React, { PropsWithChildren } from 'react';
import { Button } from 'flowbite-react';


interface ContainerProps {
  title: string;
  onPrevClick: () => void; // Function to handle the "Prev" button click
  onNextClick: () => void; // Function to handle the "Next" button click
}

type SubmoduleContainerProps = PropsWithChildren<ContainerProps>

function SubmoduleContainer(props: SubmoduleContainerProps) {
    const { title, children, onPrevClick, onNextClick } = props
    return (
    <div className="flex flex-col flex-grow items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="flex-1">{children}</div>
        <div className="flex justify-between w-full mt-4">
        <Button color="gray" onClick={onPrevClick}>
            Prev
        </Button>
        <Button color="gray" onClick={onNextClick}>
            Next
        </Button>
        </div>
    </div>
    );
};

export default SubmoduleContainer;