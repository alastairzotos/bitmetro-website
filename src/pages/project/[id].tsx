import { subtitle, title } from "@/components/primitives";
import { projects } from "@/config/projects";
import { Project } from "@/types";
import { Link, Spacer } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { GithubIcon, IconExternalLink } from "@/components/icons";
import { ImageGallery } from "@/components/gallery";
import { TechChip } from "@/components/tech-chip";
import { Markdown } from "@/components/markdown";
import { GridLayout } from "@/components/new-layout/grid-layout";

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

            <div className="flex gap-2 mt-4 mb-8">
              <Link
                isExternal
                as={NextLink}
                className={buttonStyles({ variant: "bordered", radius: "full" })}
                href={project.link}
              >
                <IconExternalLink />
                View
              </Link>

              {
                project.otherLinks?.map((link, index) => (
                  <Link
                    key={index}
                    isExternal
                    as={NextLink}
                    className={buttonStyles({ variant: "bordered", radius: "full" })}
                    href={link.url}
                  >
                    <IconExternalLink />
                    {link.title}
                  </Link>
                ))
              }

              {project.github && (
                <Link
                  isExternal
                  // showAnchorIcon
                  as={NextLink}
                  className={buttonStyles({ variant: "bordered", radius: "full" })}
                  href={project.github}
                >
                  <GithubIcon size={20} />
                  GitHub
                </Link>
              )}
            </div>
          </div>
        )
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