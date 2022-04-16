import React from "react"
import { Droppable } from "react-beautiful-dnd"
import { IconPlus } from "@tabler/icons"
import { Text, ScrollArea, ActionIcon, Container } from "@mantine/core"

import Task from "./Task/Task"

import { KanbanList } from "../../types"

import "./List.css"

const List: React.FC<{
  // Prop Types
  colId: string
  colItems: KanbanList
}> = ({
  // Props
  colId,
  colItems,
}) => {
  return (
    <Container className="list-container">
      <Container className="list-head" fluid={true}>
        <Text size="xl">{colItems.title}</Text>
        <Text size="sm" color="dimmed">
          {`${colItems.items.length} ${colItems.items.length === 1 ? "Task" : "Task"}`}
        </Text>
      </Container>

      <div className="top-box-shadow" />

      <ScrollArea
        type="hover"
        scrollHideDelay={100}
        styles={{
          root: { background: "#dedede" },
          scrollbar: { zIndex: 1 },
        }}
      >
        <Droppable droppableId={colId}>
          {(provided, snapshot) => {
            return (
              <Container className="task-container" ref={provided.innerRef}>
                {colItems.items.map((item, index) => (
                  <Task key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </Container>
            )
          }}
        </Droppable>
      </ScrollArea>

      <div className="bottom-box-shadow" />

      <Container className="button-container" fluid={true}>
        <ActionIcon variant="filled">
          <IconPlus />
        </ActionIcon>
      </Container>
    </Container>
  )
}

export default List
