import React from "react"
import { Divider, Text, Card, Container } from "@mantine/core"
import { Draggable, Droppable } from "react-beautiful-dnd"

import type { KanbanList } from "../types"

const List: React.FC<{
  // Prop Types
  listId: string
  listItems: KanbanList
}> = ({
  // Props
  listId,
  listItems,
}) => {
  return (
    <Droppable droppableId={listId}>
      {(provided, snapshot) => (
        <Container className="task-container" ref={provided.innerRef}>
          {listItems.items.map((item, index) => (
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
          ))}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  )
}

export default List
