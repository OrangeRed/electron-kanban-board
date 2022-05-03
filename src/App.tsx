import { useState } from "react"
import Board from "./components/Board"

import "./App.css"

import { testBoard } from "./test"

/** TODO LIST
 * This is a test commit
 *  2) Implement button to make new task
 *  3) Implement ability to edit tasks
 *  4) Add sidebar with following buttons
 *    1) Modal to add, rearrange lists
 *    2) Force save data
 *    3) Import data? maybe
 *    4) Light / Dark mode
 */

const App = () => {
  const [board, setBoard] = useState(testBoard)

  return <Board board={board} setBoard={setBoard} />
}

export default App
