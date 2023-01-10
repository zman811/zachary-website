import { Button, Center, Divider, Grid } from "@mantine/core";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Grid columns={12}>
        <Grid.Col span={1}>
          <Link href="/">
            <Button style={{ margin: "0.5em" }}>Home</Button>
          </Link>
        </Grid.Col>
        <Grid.Col offset={9} span={1}>
          <Link href="/tech">
            <Button style={{ margin: "0.5em" }}>Tech Stack</Button>
          </Link>
        </Grid.Col>
        <Grid.Col span={1}>
          <Center>
            <Link href="/blog">
              <Button style={{ margin: "0.5em" }}>Blog</Button>
            </Link>
          </Center>
        </Grid.Col>
      </Grid>
      <Divider style={{ marginTop: "0.5em", marginBottom: "0.5em" }}></Divider>
    </>
  );
}
