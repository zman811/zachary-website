import { Button, Center, Grid } from "@mantine/core";
import Link from "next/link";

export default function NavBar() {
  return (
    <Grid columns={12}>
      <Grid.Col span={1}>
        <Link href="/">
          <Button style={{ margin: "0.5em" }}>Home</Button>
        </Link>
      </Grid.Col>
      <Grid.Col offset={10} span={1}>
        <Center>
          <Link href="/test">
            <Button style={{ marginTop: "0.5em" }}>test</Button>
          </Link>
        </Center>
      </Grid.Col>
    </Grid>
  );
}