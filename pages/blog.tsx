import NavBar from "../components/NavBar";
import Head from "next/head";
import BlogPost from "../components/BlogPost";
import { Center, Space, Title } from "@mantine/core";

export default function Blog({test}:{test: string}) {
  console.log(test)
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

export async function getServerSideProps() {
  const mongoose = require("mongoose");
  mongoose.connect(process.env.MONGODB);
  // need to make a schema and query the db when page loads to get the info for blog

  return { props: { test: "test" } };
}
