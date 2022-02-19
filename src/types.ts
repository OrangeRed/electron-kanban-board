export type KanbanItem = {
  id: string
  title: string
  content?: string
}

export type KanbanColumn = {
  title: string
  items: KanbanItem[]
}

export type KanbanList = {
  [key: string]: KanbanColumn
}
