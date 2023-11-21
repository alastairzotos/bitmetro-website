import { ImageGallery } from "@/components/gallery";
import { IconEmailOutline } from "@/components/icons";
import DefaultLayout from "@/components/layouts/default";
import { Markdown } from "@/components/markdown";
import { title } from "@/components/primitives";
import { meConfig } from "@/config/me";
import { siteConfig } from "@/config/site";
import { Link, Spacer } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="xs:px-6 md:px-12 mt-8">
        <Markdown>{meConfig.desc}</Markdown>

        <Spacer y={8} />

        <div className="flex justify-center">
          <Link
            as={NextLink}
            className={buttonStyles({ variant: "shadow", radius: "full", color: 'success' , size: 'lg'})}
            href={siteConfig.links.contact}
          >
            <IconEmailOutline width={20} height={20} />
            Get in touch
          </Link>
        </div>

        <Spacer y={8} />

        <h3 className={title({ size: 'md', color: 'cyan' })}>Photos</h3>
        <ImageGallery images={meConfig.photos} />
      </div>
    </DefaultLayout>
  )
}

export const getStaticProps = async () => {
  return Promise.resolve({
    props: {}
  })
}
