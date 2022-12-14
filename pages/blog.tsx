import NavBar from "../components/NavBar";
import Head from "next/head";
import BlogPost from "../components/BlogPost";
import { Center, Space, Title } from "@mantine/core";

export default function Blog({ test, data }: { test: string, data: Array<{post: string, title: string}> }) {
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
        {/* <BlogPost /> */}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const blog = require("../utils/mongo");
 // const mongoose = require("mongoose");
  let data = await blog.find({});
  let newdata = JSON.parse(JSON.stringify(data)).reverse()
  // await blog.create({post: "this is a test post"})
  console.log(data);


  //console.log(await blog.find({}))
  // need to make a schema and query the db when page loads to get the info for blog

  return { props: { test: "test", data: newdata } };
}
