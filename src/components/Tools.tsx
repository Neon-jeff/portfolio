import Image from 'next/image'
import { title } from 'process'
import React from 'react'
import expo from '@/images/logos/logo-type-a.svg'
import {Tools as ToolsIcon} from 'iconoir-react'



function ToolsItem({ title, logouri }: { title: string, logouri: string }) {
    return (
        <div className='flex flex-col  space-y-2 hover:scale-105 transition ease-in duration-100 group' aria-label='tool'>
            <Image src={logouri} height={70} width={70} alt='Neon jeff toolset icon' className='w-10 h-10 object-contain ' />
            <p className='text-zinc-600 dark:text-zinc-200 text-sm group-hover:font-semibold'>{title}</p>
        </div>
    )

}

const Tools = () => {
    const tools :Array<{title: string, logouri: string }> = [
        {
            title: 'React',
            logouri: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
        },
        {
            title: 'Next.js',
            logouri: 'https://www.svgrepo.com/show/342062/next-js.svg'
        },
        {
            title: 'Tailwind CSS',
            logouri:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
        },
        {
            title:'React Native',
            logouri:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
        },
        {
            title:'Expo',
            logouri:expo
        },
        {
            title:'Zustand',
            logouri:'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg'
        },
        {
            title:'Node.js',
            logouri:'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
        },
        {
            title:'MongoDB',
            logouri:'https://www.svgrepo.com/show/331488/mongodb.svg'
        },
        {
            title:'PostgreSQL',
            logouri:'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
        },
        {
            title:'Docker',
            logouri:'https://www.svgrepo.com/show/452192/docker.svg'
        },
        {
            title:'Python',
            logouri:'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
        },
        {
            title:'Django',
            logouri:'https://www.svgrepo.com/show/373554/django.svg'
        },
        {
            title:'FastAPI',
            logouri:'https://www.svgrepo.com/show/330413/fastapi.svg'
        },

        {
            title:'Figma',
            logouri:'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
        },


        {
            title:'Git',
            logouri:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg'
        },



    ]
    return (
        <div className='mt-16 space-y-10'>
            <h1 className='text-base p-3 py-2 bg-gray-50 dark:bg-zinc-800 items-center lg:text-zinc-300 dark:text-zinc-300 max-md:text-sm border w-fit rounded-full font-bold flex gap-2 text-zinc-600'><ToolsIcon/> My Tools</h1>
            <div className='grid lg:grid-cols-4 grid-cols-3 gap-10'>
            {
                tools.map((tool, index) => (
                    <ToolsItem key={index} title={tool.title} logouri={tool.logouri} />
                ))
            }
            </div>
        </div>
    )
}

export default Tools