import React, { useState } from 'react'
import json from './data.json'

const List = ({ list, addFolder, deleteFolder }) => {
    const [open, setOpen] = useState({})
    return (
        <div className="text-xl">
            {list.map((node) => (
                <div key={node.id} className="ml-4">
                    {node.isfolder && (open[node.name] ? "+" : "-")}
                    <span className='cursor-pointer' onClick={() => setOpen(prev => ({ ...prev, [node.name]: !prev[node.name] }))} >{node.name}</span>
                    {node.isfolder && <span onClick={() => addFolder(node.id)} className='text-sm ml-6 cursor-pointer'>➕</span>}
                    {node.isfolder && <span onClick={() => deleteFolder(node.id)} className='text-sm ml-2 cursor-pointer'>❌</span>}
                    {node?.children && open[node.name] && <List list={node.children} addFolder={addFolder} deleteFolder={deleteFolder} />}
                </div>
            ))}
        </div>
    )
}

function FileExplorer() {
    const [data, setData] = useState(json)

    const addFolder = (parentId) => {
        const name = prompt("Enter Folder Name")
        if (!name) return
        const updateData = (prev) => {
            return prev.map((node) => {
                if (node.id === parentId) {
                    return {
                        ...node,
                        children: [
                            ...node.children,
                            {
                                id: Math.random(),
                                name: name,
                                isfolder: true,
                                children: []
                            }
                        ]
                    }
                }
                if (node.children) {
                    return { ...node, children: updateData(node.children) }
                }
                return node

            })
        }
        setData(prev => updateData(prev))

    }

    const deleteFolder = (parentId) => {
        const updateData = (prev) => {
            return prev
                .filter((node) => node.id !== parentId)
                .map((node) => {
                    if (node.children) {
                        return { ...node, children: updateData(node.children) }
                    }
                    return node
                })
        }
        setData(prev => updateData(prev))
    }
    return (
        <>
            <div className='text-3xl text-center'>File/Folder Explorer</div>
            <List list={data} addFolder={addFolder} deleteFolder={deleteFolder} />
        </>
    )
}

export default FileExplorer