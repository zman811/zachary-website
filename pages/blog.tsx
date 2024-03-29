import NavBar from "../components/NavBar";
import Head from "next/head";
import BlogPost from "../components/BlogPost";
import { Center, Space, Title, Text } from "@mantine/core";

export default function Blog({
  data,
}: {
  data: Array<{ post: string; title: string }>;
}) {
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
        <Center>
          {/* <Text style={{ width: "40em", textAlign: "center" }}>
            This page will be filled out with notes I have kept from when I
            started learning to code, most of the first posts will be filled in
            from the notes. Once it&#39;s filled in I will start working on new
            ones!
          </Text> */}
        </Center>
        <Space h="lg" />
        {[...Array(data.length)].map((_, i) => (
          <Center key={i} style={{ margin: "1em" }}>
            <BlogPost title={data[i].title} text={data[i].post} />
          </Center>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // may want to change to static props since the posts will not change that often
  const blog = require("../utils/mongo");
  let data = await blog.find({});
  let newdata = JSON.parse(JSON.stringify(data)).reverse();

  return { props: { data: newdata } };
}
