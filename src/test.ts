import { v4 as uuidv4 } from "uuid"

import { KanbanBoard, KanbanTask } from "./types"

export const testTasks: KanbanTask[] = [
  {
    id: uuidv4(),
    title: "🔹 Solar Exchange ",
    content: "Create Solar Exchange UI",
  },
  {
    id: uuidv4(),
    title: "🔹 Learn Formik",
    content: "Simple Formik project ( . . . )",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    content: "Add totals/averages to the bottom of energy dashboard table",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    content: "Add totals/averages to the bottom of energy dashboard table",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    content: "Add totals/averages to the bottom of energy dashboard table",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    content: "Add totals/averages to the bottom of energy dashboard table",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    content: "Add totals/averages to the bottom of energy dashboard table",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    content: "Add totals/averages to the bottom of energy dashboard table",
  },
]

export const testLists: KanbanBoard = {
  [uuidv4()]: {
    title: "To Do",
    items: testTasks,
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
