import React, { useState } from "react"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { v4 as uuidv4 } from "uuid"
import Column from "./components/Column"
import { KanbanItem, KanbanList } from "./types"

import { KanbanBoard } from "./types"

import { testLists } from "./test"

const testCols: KanbanList = {
  [uuidv4()]: {
    title: "To Do",
    items: testColItems,
  },
  [uuidv4()]: {
    title: "In Progress",
    items: [],
  },
  [uuidv4()]: {
    title: "Done",
    items: [],
  },
}

/** TODO LIST
 *  1) Improve performance on dragging cards (padding / margin issue)
 *    1.1) https://github.com/atlassian/react-beautiful-dnd/issues/1855
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
  const [columns, setColumns] = useState(testCols)

  return (
    <div
      className="container"
      style={{
        height: "100%",
        width: "100%",
        overflowX: "auto",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        overflowY: "hidden",
      }}
    >
      <DragDropContext
        onDragEnd={(result) => setColumns(onDragEnd(result, columns))}
      >
        {Object.entries(columns).map(([colId, colItems]) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Column colId={colId} colItems={colItems} />
            </div>
          )
        })}
      </DragDropContext>
    </div>
  )
}

export default App
