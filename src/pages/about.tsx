import DefaultLayout from "@/components/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <p>todo</p>
    </DefaultLayout>
  )
}

export const getStaticProps = async () => {
	return Promise.resolve({
    props: {}
  })
}
