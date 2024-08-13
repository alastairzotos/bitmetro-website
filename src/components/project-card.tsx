import { title } from '@/components/primitives';
import { Project } from '@/types';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const className = (project.cardStyle || 'col-span-1') + ' bg-slate-900 hover:bg-slate-800 border border-slate-600 transition-all duration-150 ease-in-out';

  return (
    <div className={className}>
      <Link href={`/project/${project.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
        <div className="p-6">
          <div className="pb-0 pt-2 px-4 flex-col items-start">
            <h2 className={title({ size: project.primaryTitle ? 'lg' : 'md', color: project.primaryTitle ? 'green' : 'blue' })}>{project.name}</h2>
            <h4 className="text-large mt-4 mb-2">{project.subtitle}</h4>
          </div>
          <div className="overflow-visible py-2 w-full">
            <div className='flex justify-center w-full'>
              <Image
                alt={project.primaryImage.description}
                className="object-cover"
                src={project.primaryImage.src}
                style={{ maxHeight: 200 }}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
