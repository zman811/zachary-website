import { Center, Text, Title, Space, Accordion, Button } from "@mantine/core";
import Head from "next/head";
import image from "../public/IMG_5771e.jpeg";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Personal website" />
      </Head>
      <NavBar />
      <main>
        <Center>
          <Text style={{ textAlign: "left", width: "250px" }} size={20}>
            Hello there,
          </Text>
        </Center>
        <Center>
          <Text size={50}>I&#39;m Zachary</Text>
        </Center>
        <Space h="md" />
        <Center>
          <Text>{/* Write a brief into to myself here */}</Text>
        </Center>
        <Space h="md" />
        <Center>
          <Accordion
            variant="separated"
            defaultValue="customization"
            style={{ width: "40em", textAlign: "center", margin: "2em" }}
          >
            <Accordion.Item value="About Me">
              <Accordion.Control>About me</Accordion.Control>
              <Accordion.Panel>
                <Center>
                  <Text style={{ margin: "1em", width: "50em" }}>
                    Ever since I was young I have been interested in tech. I
                    built my own computer in high school and taught myself basic
                    code. Once I started to write my first programs I knew that
                    I had a passion for it.
                    <br />
                    <br />
                    I then enrolled at Hack Reactor, a 12-week software
                    engineering immersive program with over 1000+ hours of
                    coding. Full-Stack development with JavaScript, React,
                    Express, PostgreSQL, MongoDB, and MySQL in an AGILE
                    environment.
                    <br />
                    <br />
                    While my background Is limited my passion for software
                    development is strong. This is what I enjoy doing. With
                    strong problem-solving skills as well as communication and
                    time management, I am excited to contribute to a team as a
                    full-stack software engineer
                  </Text>
                </Center>
                <Center style={{ margin: "1em" }}>
                  {/* <Image
                    height={200}
                    width={300}
                    src={image}
                    style={{ border: "8px solid white" }}
                    alt="Picture of Zachary"
                  ></Image>
                   //TODO move this to a seprate about me page
                  */}
                  <Button>Learn more</Button>
                </Center>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="About this page">
              <Accordion.Control>About this page</Accordion.Control>
              <Accordion.Panel>
                <Center>Put text about the page/tech stack here</Center>
                <Space h="lg" />
                <Center>
                  <Button style={{ margin: "0.5em" }}>
                    Why the tech stack?
                  </Button>
                  <Button style={{ margin: "0.5em" }}>
                    What I have learned
                  </Button>
                </Center>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="Blog">
              <Accordion.Control>A Blog? Why?</Accordion.Control>
              <Accordion.Panel>
                <Center>
                  <Text>
                    Going to add text in here talking about why I made a blog
                    page
                  </Text>
                </Center>
                <Space h="lg" />
                <Center>
                  <Link href="blog">
                    <Button>Go to the Blog</Button>
                  </Link>
                </Center>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Image
            height={200}
            width={300}
            src={image}
            style={{ border: "4px solid white" }}
            alt="Picture of Zachary"
          />
        </Center>
        <Space h="md" />
      </main>
    </div>
  );
}
