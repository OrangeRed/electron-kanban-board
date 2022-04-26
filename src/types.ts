export type KanbanTask = {
  id: string
  title: string
  description?: string
}

export type KanbanList = {
  title: string
  items: KanbanTask[]
}

export type KanbanBoard = Record<string, KanbanList>
