// Imports
import React from "react"
import { Container } from "@mantine/core"
import { DragDropContext } from "react-beautiful-dnd"
// Types
import type { DropResult } from "react-beautiful-dnd"
import type { KanbanBoard } from "../types"
// Components
import List from "./List"

const onDragEnd = (result: DropResult, board: KanbanBoard): KanbanBoard => {
  if (!result?.destination) return board

  const { source, destination } = result
  const srcColumn = board[source.droppableId]
  const cpSrcItems = [...srcColumn.items]
  const destColumn = board[destination.droppableId]
  const cpDestItems = [...destColumn.items]
  const [removed] = cpSrcItems.splice(source.index, 1)

  // Change item position
  if (source.droppableId === destination.droppableId) {
    cpSrcItems.splice(destination.index, 0, removed)
    return {
      ...board,
      [source.droppableId]: {
        ...srcColumn,
        items: cpSrcItems,
      },
    }
  } else {
    cpDestItems.splice(destination.index, 0, removed)
    return {
      ...board,
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

const Board: React.FC<{
  board: KanbanBoard
  setBoard: (board: KanbanBoard) => void
}> = ({
  // Props
  board,
  setBoard,
}) => {
  return (
    <Container className="board-container" fluid={true}>
      <DragDropContext onDragEnd={(result) => setBoard(onDragEnd(result, board))}>
        {Object.entries(board).map(([listId, list]) => (
          <List key={listId} listId={listId} list={list} />
        ))}
      </DragDropContext>
    </Container>
  )
}

export default Board
