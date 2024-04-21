"use client"

import { Table } from 'flowbite-react'
import React from 'react'
import { Content } from '@/services/TableTypes'

export default function TablePreview({content}: {content: Content}) {
  return (
    <div className='px-10'>
        {content.map(section => {
            return (
                <div className='mb-10'>
            <h1 className='text-xl mb-4'>{section.title}</h1>
            <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                <Table.HeadCell>Functions</Table.HeadCell>
                <Table.HeadCell>What it does</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {section.items.map(item => {
                        return (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{item.func}</Table.Cell>
                            <Table.Cell>{item.what_it_does}</Table.Cell>
                            </Table.Row>

                        )
                    })}
                </Table.Body>
            </Table>
            </div>
            </div>
            )    
        })}



    </div>
  )
}
