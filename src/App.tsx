import React, { useState } from "react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { Container } from "@mantine/core"
import { List } from "./components"

import { KanbanBoard } from "./types"

import { testLists } from "./test"

import "./App.css"

/** TODO LIST
 *  2) Add button to make new column
 *  3) Add button to make new task
 *  4) Add button to edit task
 *  5) Make columns draggable
 */

const onDragEnd = (result: DropResult, columns: KanbanBoard): KanbanBoard => {
  if (!result?.destination) return columns
  const { source, destination } = result
  const srcColumn = columns[source.droppableId]
  const cpSrcItems = [...srcColumn.items]
  const destColumn = columns[destination.droppableId]
  const cpDestItems = [...destColumn.items]
  const [removed] = cpSrcItems.splice(source.index, 1)

  // Change item position
  if (source.droppableId === destination.droppableId) {
    cpSrcItems.splice(destination.index, 0, removed)
    return {
      ...columns,
      [source.droppableId]: {
        ...srcColumn,
        items: cpSrcItems,
      },
    }
  } else {
    cpDestItems.splice(destination.index, 0, removed)
    return {
      ...columns,
      [source.droppableId]: {
        ...srcColumn,
        items: cpSrcItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: cpDestItems,
      },
    }
  }
}

const App = () => {
  const [columns, setColumns] = useState(testLists)

  return (
    <Container className="board-container" fluid={true}>
      <DragDropContext onDragEnd={(result) => setColumns(onDragEnd(result, columns))}>
        {Object.entries(columns).map(([colId, colItems]) => (
          <List key={colId} colId={colId} colItems={colItems} />
        ))}
      </DragDropContext>
    </Container>
  )
}

export default App
