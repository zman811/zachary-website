import {
  Center,
  Text,
  Title,
  Space,
  Accordion,
  Button,
  Card,
  Grid,
} from "@mantine/core";
import Head from "next/head";
import image from "../public/IMG_5771e.jpeg";
import github from "../public/github2.png";
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
          <Text>
            {/* This Page is not fully complete yet, any disabled links or buttons
            will be added once they are done! */}
            {/* Write a brief into to myself here */}
          </Text>
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
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="About this page">
              <Accordion.Control>About this page</Accordion.Control>
              <Accordion.Panel>
                <Center>
                  <Text>
                    This page is made with nextjs, react, typescript, and
                    MongoDB. If you want to learn more about why I chose the
                    tech stack I did click the link below to see a full page on
                    why I used it.
                    <br />
                    <br />
                    Why did I make this page? I made this page to have somewhere
                    to practice new tech or ways of making a page. It is also
                    somewhere where I can post all of the things I learn to help
                    other people.
                  </Text>
                </Center>
                <Space h="lg" />
                <Center>
                  <Link href="/tech">
                    <Button style={{ margin: "0.5em" }}>
                      Why the tech stack?
                    </Button>
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
        <Space h="md" />
        <Center>
          <div style={{ textAlign: "center", width: "800px" }}>
            <Title size={50} order={2}>
              My Projects
            </Title>

            <Grid columns={6}>
              <Grid.Col span={3}>
                <Card>
                  <Card.Section>
                    <Image
                      src={github}
                      alt="github Logo"
                      style={{ margin: "1em" }}
                    />
                    <Title order={3}>Serum</Title>
                    <Text size="xl">An eCommerce storefront page</Text>
                    <ul>
                      <li>
                        Architected the React front-end of a form for submitting
                        reviews using a restful API
                      </li>
                      <li>
                        Optimized load times by making more efficient requests,
                        reducing request times from 400ms to under 60ms allowing
                        for faster page loads
                      </li>
                      <li>
                        Built a system using external services to take an
                        uploaded image and convert it to a link in order to
                        display a thumbnail
                      </li>
                    </ul>
                    <Button
                      component="a"
                      href="https://github.com/FECTeamOne/Serum"
                      target="_blank"
                    >
                      Serum Github
                    </Button>
                    <Space h="md" />
                  </Card.Section>
                </Card>
              </Grid.Col>
              <Grid.Col span={3}>
                <Card>
                  <Card.Section>
                    <Image
                      src={github}
                      alt="github Logo"
                      style={{ margin: "1em" }}
                    />
                    <Title order={3}>Gopher</Title>
                    <Text size="xl">
                      A application for people to coordinate shopping lists
                    </Text>
                    <ul>
                      <li>
                        Created a calendar page using React and integrated it
                        with the PostgreSQL database made by a team member
                      </li>
                      <li>
                        Increased the development speed of the web page by
                        constructing reusable react components ensuring
                        consistency between elements on the page
                      </li>
                      <li>
                        Collaborated with a team of 5 engineers to integrate
                        multiple parts of the application together seamlessly
                      </li>
                    </ul>
                    <Button
                      component="a"
                      href="https://github.com/blueocean-rico/gopher"
                      target="_blank"
                    >
                      Gopher Github
                    </Button>
                    <Space h="md" />
                  </Card.Section>
                </Card>
              </Grid.Col>
              <Grid.Col span={3}>
                <Card>
                  <Card.Section>
                    <Image
                      src={github}
                      alt="github Logo"
                      style={{ margin: "1em" }}
                    />
                    <Title order={3}>Serum Backend</Title>
                    <Text size="xl">
                      The restful API back end to the Serum Ecommerce site
                    </Text>
                    <ul>
                      <li>
                        Analyzed data types and selected PostgreSQL as the
                        database, ensuring efficient data collection and
                        utilized indexes in order to speed up queries
                      </li>
                      <li>
                        Utilized loader.io to test the speeds and added a load
                        balancer with multiple EC2 instances to optimize request
                        amounts from 200 rps to 1000 rps
                      </li>
                      <li>
                        Optimized the load balancer to use caching allowing for
                        the fastest read speeds, increasing the speeds to over
                        2000 rps
                      </li>
                    </ul>
                    <Button
                      component="a"
                      href="https://github.com/Team-Greyjoy/sdc"
                      target="_blank"
                    >
                      Serum Backend Github
                    </Button>
                    <Space h="md" />
                  </Card.Section>
                </Card>
              </Grid.Col>
            </Grid>
          </div>
        </Center>
        <Space h="md" />
        <Space h="md" />
        <Space h="md" />
      </main>
    </div>
  );
}
