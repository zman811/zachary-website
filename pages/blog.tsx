import NavBar from "../components/NavBar";
import Head from "next/head";
import BlogPost from "../components/BlogPost";
import { Center, Space, Title } from "@mantine/core";

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
        <Space h="lg" />
        {[...Array(4)].map((_, i) => (
          <Center key={i} style={{ margin: "1em" }}>
            <BlogPost />
          </Center>
        ))}
        {/* <BlogPost /> */}
      </main>
    </>
  );
}
