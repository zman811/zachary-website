import { Button, Center, Text, Title } from "@mantine/core";
import Head from "next/head";
import image from "../public/IMG_5771e.jpeg";
import Image from "next/image";
import NavBar from "../components/NavBar";

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
          <Title order={2}>Hello!</Title>
        </Center>
        <Center>
          <Title order={3}>About me</Title>
        </Center>
        <Center style={{ margin: "1em" }}>
          <Image
            height={200}
            width={300}
            src={image}
            style={{ border: "2px solid white" }}
            alt="Picture of Zachary"
          ></Image>
        </Center>
        <Center>
          <Text style={{ margin: "0.5em" }}>
            Ever since I was young I have been interested in tech. I built my
            own computer in high school and taught myself basic code. Once I
            started to write my first programs I knew that I had a passion for
            it.
            <br />
            <br />
            I then enrolled at Hack Reactor, a 12-week software engineering
            immersive program with over 1000+ hours of coding. Full-Stack
            development with JavaScript, React, Express, PostgreSQL, MongoDB,
            and MySQL in an AGILE environment.
            <br />
            <br />
            While my background Is limited my passion for software development
            is strong. This is what I enjoy doing. With strong problem-solving
            skills as well as communication and time management, I am excited to
            contribute to a team as a full-stack software engineer
            <br />
            <br />
            Front End | JavaScript (ES5 and ES6), React, NextJS, HTML5, CSS3
            Back End | Node.js, Express, MongoDB, MySQL, PostgreSQL, Ngnix,
            RESTful API Development Testing/Deployment | Jest, Mocha, Chai, AWS:
            EC2 Developer Tools | Git, npm, Webpack, Babel, Agile Methodology,
            TDD
          </Text>
        </Center>
      </main>
    </div>
  );
}
