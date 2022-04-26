import React from "react"
import { Card, Divider, Group, Text } from "@mantine/core"
import { IconClearAll } from "@tabler/icons"

const Task: React.FC<{
  // Prop Types
  title: string
  content: string
}> = ({
  // Props
  title,
  content,
}) => {
  return (
    <Card className="task">
      <Text size="md" mb={10}>
        {title}
      </Text>
      <Group spacing={5} align="start">
        <IconClearAll size={16} style={{ marginTop: 3 }} />
        <Text size="sm" lineClamp={2} style={{ width: "90%" }}>
          {content}
        </Text>
      </Group>
      <Divider my="sm" />
    </Card>
  )
}

export default Task
