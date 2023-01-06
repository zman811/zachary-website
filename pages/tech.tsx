import NavBar from "../components/NavBar";
import Head from "next/head";
import { Center, Title, Space, Text } from "@mantine/core";

export default function Tech() {
  return (
    <>
      <Head>
        <title>Tech-Stack</title>
        <meta name="description" content="Personal website techStack" />
      </Head>
      <NavBar />
      <main>
        <Space h="lg" />
        <Center>
          <div style={{ textAlign: "center", width: "50em" }}>
            <Title order={2}>Next.JS</Title>
            <Space h="lg" />
            <Text>
              The main framework that this page uses is nextjs. This is because
              next allows for effortless usage of SSR and SSG. This can help
              with page performance a lot. It also provides serverless
              functions, which makes it easier when there is little server-side
              code.
            </Text>
            <Space h="lg" />
            <Title order={2}>React.JS</Title>
            <Space h="lg" />
            <Text>React text here</Text>
            <Space h="lg" />
            <Title order={2}>MongoDB</Title>
            <Space h="lg" />
            <Text>MongoDB text here</Text>
          </div>
        </Center>
      </main>
    </>
  );
}
