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
        <Center style={{margin: "1em"}}>
          <Image height={200} width={300} src={image} style={{border: '2px solid white'}} alt="Picture of Zachary"></Image>
        </Center>
        <Center>
          <Text>
            Bio here
          </Text>
        </Center>
      </main>
    </div>
  );
}
