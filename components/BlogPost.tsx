import { Paper, Text, Title } from "@mantine/core";

export default function BlogPost() {
  return (
    <Paper
      shadow="xl"
      p="md"
      withBorder
      style={{ width: "40em", height: "10em", overflow: "scroll" }}
    >
      <Title style={{ textAlign: "center" }} order={3}>
        Blog post Title
      </Title>
      <Text>Blog post text</Text>
    </Paper>
  );
}
