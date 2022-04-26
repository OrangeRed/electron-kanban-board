import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { IconPlus } from "@tabler/icons"
import { ActionIcon, Container, Modal } from "@mantine/core"

import type { KanbanTask } from "../types"

import TaskEditor from "./TaskEditor"

const NewTaskButton: React.FC<{
  tasks: KanbanTask[]
  updateTasks: (list: KanbanTask[]) => void
}> = ({
  // Props
  tasks,
  updateTasks,
}) => {
  const [modalToggle, setModalToggle] = useState(false)

  return (
    <Container className="button-container" fluid={true}>
      <ActionIcon variant="filled" onClick={() => setModalToggle(true)}>
        <IconPlus />
      </ActionIcon>

      <Modal
        opened={modalToggle}
        onClose={() => setModalToggle(false)}
        withCloseButton={false}
        closeOnEscape
        centered
        classNames={{ close: "action-button" }}
      >
        <TaskEditor
          init={{
            id: uuidv4(),
            title: "Lorem Ipsum",
            description:
              "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its flying ability to quickly chase down targeted prey.You can tell how it’s feeling by the smoke spouting from its shell. Tremendous velocity is a sign of good health.",
          }}
          preview={false}
          resolver={(task?: KanbanTask) => {
            if (task) {
              updateTasks([...tasks, task])
            }
            setModalToggle(false)
          }}
        />
      </Modal>
    </Container>
  )
}

export default NewTaskButton
