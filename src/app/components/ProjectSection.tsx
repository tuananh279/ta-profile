import React from 'react'
import WrapperSection from './WrapperSection'
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { LIST_PROJECTS } from '../constants'

const ProjectSection = () => {
    return (
        <WrapperSection id='skill' className='flex flex-col'>
            <h1 className='font-bold text-xl'>Dự án</h1>
            <div className='gap-10 grid grid-cols-3 px-5 py-4'>
                {LIST_PROJECTS.map((project) => (
                    <Card key={project.name} className="h-[400px] p-2">
                        <CardHeader className="flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">{project.name}</p>
                            <h4 className="text-white font-medium text-large">{project.description}</h4>
                        </CardHeader>
                        <CardBody>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src={project.imgPreview}
                            />
                        </CardBody>
                        <CardFooter className="flex justify-between">
                            <p>{project.lib}</p>
                            <Button>Xem chi tiết</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </WrapperSection>
    )
}

export default ProjectSection