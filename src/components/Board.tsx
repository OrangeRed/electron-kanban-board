import React from "react"
import { IconPlus } from "@tabler/icons"
import { DragDropContext } from "react-beautiful-dnd"
import { Text, ScrollArea, ActionIcon, Container } from "@mantine/core"

import Lists from "./Lists"

import type { DropResult } from "react-beautiful-dnd"
import type { KanbanBoard } from "../types"

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
        {Object.entries(board).map(([listId, listItems]) => (
          <Container className="list-container">
            <Container className="list-head" fluid={true}>
              <Text size="xl">{listItems.title}</Text>
              <Text size="sm" color="dimmed">
                {`${listItems.items.length} ${listItems.items.length === 1 ? "Task" : "Task"}`}
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
              <Lists listId={listId} listItems={listItems} />
            </ScrollArea>

            <div className="bottom-box-shadow" />

            <Container className="button-container" fluid={true}>
              <ActionIcon variant="filled">
                <IconPlus />
              </ActionIcon>
            </Container>
          </Container>
        ))}
      </DragDropContext>
    </Container>
  )
}

export default Board
