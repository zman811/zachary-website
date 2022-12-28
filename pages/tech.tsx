import NavBar from "../components/NavBar";
import Head from "next/head";
import { Center, Title } from "@mantine/core";

export default function Tech() {
  return (
    <>
      <Head>
        <title>Tech-Stack</title>
        <meta name="description" content="Personal website techStack" />
      </Head>
      <NavBar />
      <main>
        <Center>
          <Title order={2}>Hello</Title>
        </Center>
      </main>
    </>
  );
}
