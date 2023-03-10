import { Button, Center, Divider, Grid } from "@mantine/core";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Grid columns={12}>
        <Grid.Col lg={1} xs={3}>
          <Link href="/">
            <Button style={{ margin: "0.5em" }}>Home</Button>
          </Link>
        </Grid.Col>
        <Grid.Col offsetLg={8} lg={2} xs={3} offsetXs={3}>
          <Link href="/tech">
            <Button style={{ margin: "0.5em" }}>Tech Stack</Button>
          </Link>
        </Grid.Col>
        <Grid.Col lg={1} xs={3}>
            <Link href="/blog">
              <Button style={{ margin: "0.5em" }}>Blog</Button>
            </Link>
        </Grid.Col>
      </Grid>
      <Divider style={{ marginTop: "0.5em", marginBottom: "0.5em" }}></Divider>
    </>
  );
}
