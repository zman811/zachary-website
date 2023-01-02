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
              The main frame work that this page uses is nextjs. This is beacuse
              next allows for very easy usage of SSR and SSG. This can help with
              page perforamce a lot. It also allows for serverless functions,
              which make it easier when there is not a ton of sever side code.
            </Text>
          </div>
        </Center>
      </main>
    </>
  );
}
