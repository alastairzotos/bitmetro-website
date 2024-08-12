import { ImageGallery } from "@/components/gallery";
import { IconEmailOutline } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import { GridLayout } from "@/components/new-layout/grid-layout";
import { title } from "@/components/primitives";
import { meConfig } from "@/config/me";
import { siteConfig } from "@/config/site";
import { Spacer } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <GridLayout
      headerProps={{
        title: 'About',
        content: (
          <div>
            <Markdown>{meConfig.briefDesc}</Markdown>
          </div>
        ),
        links: [{
          title: 'Get in touch',
          url: siteConfig.links.contact,
          icon: <IconEmailOutline width={20} height={20} />,
        }],
      }}
    >
      <Markdown>{meConfig.desc}</Markdown>

      <Spacer y={8} />

      <h3 className={title({ size: 'md', color: 'cyan' })}>Photos</h3>
      <ImageGallery images={meConfig.photos} />
    </GridLayout>
  )
}

export const getStaticProps = async () => {
  return Promise.resolve({
    props: {}
  })
}
