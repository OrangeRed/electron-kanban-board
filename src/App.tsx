import React, { useState } from "react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { v4 as uuidv4 } from "uuid"
import Column from "./components/Column"
import { KanbanItem, KanbanList } from "./types"

const colItems: KanbanItem[] = [
  { id: uuidv4(), title: "First", content: "first task" },
  { id: uuidv4(), title: "Second", content: "second task" },
]

const cols: KanbanList = {
  [uuidv4()]: {
    title: "To do",
    items: colItems,
  },
  [uuidv4()]: {
    title: "Done",
    items: [],
  },
}

const App = () => {
  const [columns, setColumns] = useState(cols)

  const onDragEnd = (result: DropResult) => {
    if (!result?.destination) return
    const { source, destination } = result
    const srcColumn = columns[source.droppableId]
    const cpSrcItems = [...srcColumn.items]
    const destColumn = columns[destination.droppableId]
    const cpDestItems = [...destColumn.items]
    const [removed] = cpSrcItems.splice(source.index, 1)

    // Change item position
    if (source.droppableId === destination.droppableId) {
      cpSrcItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...srcColumn,
          items: cpSrcItems,
        },
      })
    } else {
      cpDestItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...srcColumn,
          items: cpSrcItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: cpDestItems,
        },
      })
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {Object.entries(columns).map(([id, colItems]) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 style={{ color: "white" }}>{colItems.title}</h2>
              <Column id={id} col={colItems} />
            </div>
          )
        })}
      </DragDropContext>
    </div>
  )
}

export default App
