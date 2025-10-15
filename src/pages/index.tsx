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
          <div className="mt-2">
            <p className={subtitle() + " text-xl md:text-2xl font-semibold text-slate-300"}>
              <span className="text-cyan-400 font-bold">Build with Bitmetro</span> — Modern web solutions for ambitious teams
            </p>
            <p className="mt-2 text-base text-slate-400">Trusted by startups, creators, and enterprises.</p>
          </div>
        ),
        links: [{
          title: 'Read more',
          url: siteConfig.navItems.about.href,
        }],
      }}
      pad={true}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 overflow-visible">
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
