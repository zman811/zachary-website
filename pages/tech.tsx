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
            <Text size="xl">Still working on how to style this page</Text>
            <Space h="xl"/>
            <Title order={1}>Vercel</Title>
            <Space h="lg" />
            <Text size="lg">
              This page is deployed using vercel. I picked this because it uses
              edge computing which can be faster and has no cold starts.
              (waiting for the page to load if it has not been used in a while)
              Vercel also has built-in continuous integration. It tracks a
              GitHub repo and updates the page if changes are pushed to the main
              branch.
            </Text>
            <Space h="lg" />
            <Space h="lg" />
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
            <Text>
              I am using React for this page because it is the most widely used
              front-end framework. Since it is so widely used there is a lot of
              support and packages for it which can make things easier. For
              example, this page uses mantine ui to help the style be more
              uniform which is used with react and typescript.{" "}
            </Text>
            <Space h="lg" />
            <Title order={2}>MongoDB</Title>
            <Space h="lg" />
            <Text>
              I chose to use MongoDB as the database for this page. This is
              because it is easy to use and fast enough for this page. Using
              MongoDB Atlas you can easily have a cloud database for free which
              helps when deploying a small page like this. Mongo also lets you
              store data more like javascript objects which can be easier for
              simple data, like a blog.
            </Text>
          </div>
        </Center>
      </main>
    </>
  );
}
