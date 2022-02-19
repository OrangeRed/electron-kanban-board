import React from "react"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { KanbanColumn } from "../types"

type ColumnProps = {
  id: string
  col: KanbanColumn
}

const Column = ({ id, col }: ColumnProps) => {
  return (
    <div style={{ margin: 8 }}>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                background: snapshot.isDraggingOver ? "orange" : "darkorange",
                padding: 4,
                width: 250,
                minHeight: 300,
              }}
            >
              {col.items.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            padding: 16,
                            margin: "0 0 8px 0",
                            minHeight: "50px",
                            backgroundColor: snapshot.isDragging
                              ? "lightblue"
                              : "cyan",
                            ...provided.draggableProps.style,
                          }}
                        >
                          <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                          <div>{item.content}</div>
                        </div>
                      )
                    }}
                  </Draggable>
                )
              })}
            </div>
          )
        }}
      </Droppable>
    </div>
  )
}

export default Column
