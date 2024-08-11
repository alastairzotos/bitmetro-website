import { ImageGallery } from "@/components/gallery";
import { IconEmailOutline } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import { GridLayout } from "@/components/new-layout/grid-layout";
import { title } from "@/components/primitives";
import { meConfig } from "@/config/me";
import { siteConfig } from "@/config/site";
import { Link, Spacer } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";

export default function AboutPage() {
  return (
    <GridLayout
      headerProps={{
        title: 'About',
        content: (
          <div>
            <Markdown>{meConfig.briefDesc}</Markdown>

            <Link
              as={NextLink}
              className={'mt-4 ' + buttonStyles({ variant: "flat", color: 'success', size: 'lg' })}
              href={siteConfig.links.contact}
            >
              <IconEmailOutline width={20} height={20} />
              Get in touch
            </Link>
          </div>
        )
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
