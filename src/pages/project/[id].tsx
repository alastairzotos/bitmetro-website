import { subtitle } from "@/components/primitives";
import { projects } from "@/config/projects";
import { Project } from "@/types";
import { Spacer } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { GithubIcon, IconExternalLink } from "@/components/icons";
import { ImageGallery } from "@/components/gallery";
import { TechChip } from "@/components/tech-chip";
import { Markdown } from "@/components/markdown";
import { GridLayout } from "@/components/new-layout/grid-layout";
import { HeaderLink } from "@/components/new-layout/header-props";

interface Props {
  project: Project;
}

const ProjectPage: NextPage<Props> = ({ project }) => {
  return (
    <GridLayout
      headerProps={{
        title: project.name,
        content: (
          <div>
            <h3 className={subtitle()}>{project.subtitle}</h3>
          </div>
        ),

        links: [
          {
            title: 'View',
            url: project.link,
            external: true,
          },
          project.github ? {
            title: 'GitHub',
            url: project.github,
            icon: <GithubIcon size={20} />,
            external: true,
          } : undefined,
          project.chromeWebStore ? {
            title: 'Chrome Web Store',
            url: project.chromeWebStore,
            icon: <IconExternalLink />,
            external: true,
          } : undefined,
        ].filter(l => l !== undefined) as HeaderLink[],
      }}
    >
      <div className="flex flex-wrap gap-2">
        {
          project.techStack.map(tool => (
            <TechChip key={tool} tool={tool} />
          ))
        }
      </div>

      <Markdown>
        {project.description}
      </Markdown>

      <Spacer y={8} />

      <ImageGallery images={project.images} />
    </GridLayout>
  );
}

export default ProjectPage;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;

  const project = projects.find(project => project.id === id);

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map(({ id }) => ({
    params: { id }
  }));

  return {
    fallback: false,
    paths,
  }
}