import NavBar from "../components/NavBar";
import Head from "next/head";
import BlogPost from "../components/BlogPost";
import { Center, Space, Title } from "@mantine/core";

export default function Blog({ data }: { data: Array<{post: string, title: string}> }) {
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
        {[...Array(data.length)].map((_, i) => (
          <Center key={i} style={{ margin: "1em" }}>
            <BlogPost title={data[i].title} text={data[i].post}/>
          </Center>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const blog = require("../utils/mongo");
  let data = await blog.find({});
  let newdata = JSON.parse(JSON.stringify(data)).reverse()
  //console.log(data);

  return { props: { data: newdata } };
}
