import NavBar from "../components/NavBar";
import Head from "next/head";
import { Center, Title } from "@mantine/core";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Personal Blog page" />
      </Head>
      <NavBar />
      <main>
        <Center>
          <Title order={2}>Blog</Title>
        </Center>
      </main>
    </>
  );
}
