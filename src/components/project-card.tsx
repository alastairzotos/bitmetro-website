import { title } from '@/components/primitives';
import { Project } from '@/types';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const className =
    (project.cardStyle || 'col-span-1') +
    ' rounded-xl shadow-lg bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700 card-fade-in';

  return (
    <div className={className}>
      <div className='h-full transition-all duration-200 ease-in-out hover:shadow-2xl hover:bg-slate-800 transform hover:scale-[1.03]'>
        <Link href={`/project/${project.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
          <div className="p-6 rounded-xl">
            <div className="pb-0 pt-2 px-4 flex-col items-start">
              <h2 className={title({ size: project.primaryTitle ? 'xl' : 'lg', color: project.primaryTitle ? 'cyan' : 'blue' }) + ' font-bold tracking-tight'}>{project.name}</h2>
              <h4 className="text-lg mt-3 mb-2 text-slate-300 font-medium">{project.subtitle}</h4>
              <button className="btn-premium mt-4">View Project</button>
            </div>
            <div className="overflow-visible py-2 w-full">
              <div className='flex justify-center w-full'>
                <Image
                  alt={project.primaryImage.description}
                  className="object-cover rounded-lg border border-slate-800 shadow"
                  src={project.primaryImage.src}
                  style={{ maxHeight: 180 }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
