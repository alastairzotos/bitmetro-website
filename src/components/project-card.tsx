import { title } from '@/components/primitives';
import { Project } from '@/types';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Card className="py-4 p-6" isPressable>
      <Link href={`/project/${project.id}`} style={{ width: '100%' }}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h2 className={title({ size: 'md', color: 'cyan' })}>{project.name}</h2>
          <h4 className="text-large mt-4 mb-2">{project.subtitle}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 w-full">
          <div className='flex justify-center w-full'>
            <Image
              alt={project.primaryImage.description}
              className="object-cover rounded-xl"
              src={project.primaryImage.src}
              style={{ maxHeight: 200 }}
            />
          </div>
        </CardBody>
      </Link>
    </Card>
  )
}
