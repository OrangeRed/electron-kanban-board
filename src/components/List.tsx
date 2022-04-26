import React, { useState } from "react"
import { Container, ScrollArea } from "@mantine/core"
import { Draggable, Droppable } from "react-beautiful-dnd"

import type { KanbanList, KanbanTask } from "../types"

import Task from "./Task"
import ListHead from "./ListHead"
import NewTaskButton from "./NewTaskButton"

const List: React.FC<{
  // Prop Types
  listId: string
  list: KanbanList
}> = ({
  // Props
  listId,
  list,
}) => {
  const [tasks, setTasks] = useState(list.items)

  return (
    <Container className="list-container">
      <ListHead title={list.title} taskAmount={list.items.length} />

      <div className="top-box-shadow" />

      <ScrollArea
        type="hover"
        scrollHideDelay={100}
        styles={{
          root: { background: "#dedede" },
          scrollbar: { zIndex: 1 },
        }}
      >
        <Droppable droppableId={listId}>
          {(provided, snapshot) => (
            <Container className="list-body" ref={provided.innerRef}>
              {list.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <Container
                        className={`task-container ${snapshot.isDragging ? "is-dragging" : ""}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Task title={item.title} content={item.description ?? ""} />
                      </Container>
                    )
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </ScrollArea>

      <div className="bottom-box-shadow" />

      <NewTaskButton tasks={tasks} updateTasks={(tasks: KanbanTask[]) => setTasks(tasks)} />
    </Container>
  )
}

export default List
