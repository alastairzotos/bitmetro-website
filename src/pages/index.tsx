import { siteConfig } from "@/config/site";
import { subtitle } from "@/components/primitives";
import { projects } from "@/config/projects";
import { ProjectCard } from "@/components/project-card";
import { GridLayout } from "@/components/new-layout/grid-layout";

export default function IndexPage() {
  return (
    <GridLayout
      headerProps={{
        title: "Bitmetro Software",
        content: (
          <div>
            <p className={subtitle()}>Use <span className="text-cyan-500">bitmetro</span> for your next web enterprise</p>
          </div>
        ),
        links: [{
          title: 'Read more',
          url: siteConfig.navItems.about.href,
        }],
      }}
      pad={false}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </div>
    </GridLayout>
  );
}

export const getStaticProps = async () => {
  return Promise.resolve({
    props: {}
  })
}
