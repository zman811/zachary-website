import { Paper, Text, Title } from "@mantine/core";

export default function BlogPost({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <Paper
      shadow="xl"
      p="md"
      withBorder
      style={{ width: "40em", height: "10em", overflow: "scroll" }}
    >
      <Title style={{ textAlign: "center" }} order={3}>
        {title}
      </Title>
      <Text>{text}</Text>
    </Paper>
  );
}
