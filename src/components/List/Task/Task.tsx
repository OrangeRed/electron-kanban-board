import React from "react"
import { Divider, Text, Card } from "@mantine/core"
import { Draggable } from "react-beautiful-dnd"

import { KanbanTask } from "../../../types"

import "./Task.css"

const Task: React.FC<{
  // Prop Types
  item: KanbanTask
  index: number
}> = ({
  // Props
  item,
  index,
}) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Card
            className={`task ${snapshot.isDragging ? "is-dragging" : ""}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Text size="lg" weight={600}>
              {item.title}
            </Text>
            <Text size="sm" color="dimmed">
              {item.content}
            </Text>
            <Divider my="sm" />
          </Card>
        )
      }}
    </Draggable>
  )
}

export default Task
