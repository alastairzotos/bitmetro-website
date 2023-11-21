import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Avatar, Button } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, IconEmailOutline } from "@/components/icons";
import DefaultLayout from "@/components/layouts/default";
import { projects } from "@/config/projects";
import { ProjectCard } from "@/components/project-card";
import { Spacer } from "@nextui-org/react";
import { meConfig } from "@/config/me";
import { Markdown } from "@/components/markdown";

export default function IndexPage() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<section className="text-center justify-center">
				<h1 className={title({ size: 'xl' })}>
					<span className={title({ color: "cyan", size: 'xl' })}>Fullstack</span>&nbsp; Development Services
				</h1>
				{/* <h1 className={title({ size: 'xl' })}>Development Services</h1> */}
				<Spacer y={8} />
				<p className={subtitle()}>Use <span className="text-purple-500">bitmetro</span> for your next fullstack web and mobile development adventure</p>
			</section>

			<section className="flex gap-3 mt-8">
				<Link
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.contact}
				>
					<IconEmailOutline width={20} height={20} />
					Contact
				</Link>

				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</section>

			<section className="text-center justify-center mt-12 w-full">
				<h4 className={title({ color: 'green', size: 'lg' })}>About</h4>
				<div className="grid grid-cols-1 md:grid-cols-6 gap-8 w-full mt-12">
					<div className="col-span-6 md:col-span-1 flex justify-center">
						<Avatar src={meConfig.image.src} className="w-20 h-20 text-large" />
					</div>
					<div className="col-span-6 md:col-span-5 text-left">
						<Markdown>{meConfig.briefDesc}</Markdown>

						<div className="flex justify-center sm:justify-start">
							<Button
								as={NextLink}
								href={siteConfig.navItems.about.href}
								className="mt-6"
								size="md"
								variant="shadow"
								color="secondary"
							>
								Read more
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="inline-block text-center justify-center mt-8">
				<h4 className={title({ color: 'green', size: 'lg' })}>Projects</h4>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
					{
						projects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))
					}
				</div>
			</section>
		</div>
	);
}

export const getStaticProps = async () => {
	return Promise.resolve({
		props: {}
	})
}
