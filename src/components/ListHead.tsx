import React from "react"
import { Container, Text } from "@mantine/core"

const ListHead: React.FC<{
  // Prop Types
  title: string
  taskAmount: number
}> = ({
  // Props
  title,
  taskAmount,
}) => {
  return (
    <Container className="list-head" fluid={true}>
      <Text size="xl">{title}</Text>
      <Text size="sm" color="dimmed">
        {`${taskAmount} ${taskAmount === 1 ? "Task" : "Tasks"}`}
      </Text>
    </Container>
  )
}

export default ListHead
