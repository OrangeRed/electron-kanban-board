import { v4 as uuidv4 } from "uuid"

import { KanbanBoard, KanbanTask } from "./types"

export const testTasks: KanbanTask[] = [
  {
    id: uuidv4(),
    title: "🔹 Solar Exchange ",
    description: "Create Solar Exchange UI",
  },
  {
    id: uuidv4(),
    title: "🔹 Learn Formik",
    description: "Simple Formik project ( . . . )",
  },
  {
    id: uuidv4(),
    title: "Pokemanz",
    description:
      "It fires off ultrasonic waves from its red orbs to weaken its prey, and then it wraps them up in its 80 tentacles.While Milotic is said to be the most beautiful Pokémon, Trainers who like Feebas and have raised it are seemingly disappointed by Milotic.If a traveler is going through a desert in the thick of night, Cacturne will follow in a ragtag group. The Pokémon are biding their time, waiting for the traveler to tire and become incapable of moving.",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    description: "Add totals/averages to the bottom of energy dashboard table",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    description: "Add totals/averages to the bottom of energy dashboard table",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    description: "Add totals/averages to the bottom of energy dashboard table",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    description: "Add totals/averages to the bottom of energy dashboard table",
  },
  {
    id: uuidv4(),
    title: "🔺 EP-1855",
    description: "Add totals/averages to the bottom of energy dashboard table",
  },
]

export const testBoard: KanbanBoard = {
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
