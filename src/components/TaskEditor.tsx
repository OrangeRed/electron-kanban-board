import React, { useState } from "react"
import { useForm } from "@mantine/form"
import { IconCheck, IconPencil, IconTrash, IconX } from "@tabler/icons"
import { Button, Group, Textarea, TextInput, ActionIcon } from "@mantine/core"

import type { KanbanTask } from "../types"

const TaskEditor: React.FC<{
  // Prop Types
  init: KanbanTask
  preview: boolean | undefined
  resolver: (task?: KanbanTask) => void
}> = ({
  // Props
  init,
  preview,
  resolver,
}) => {
  const [resolved, setResolved] = useState(false)
  const [readOnly, setReadOnly] = useState(preview)

  const form = useForm({
    initialValues: init,
  })

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values)
        setResolved(true)
        setTimeout(() => resolver(values), 250)
      })}
    >
      <Group>
        <TextInput
          required={readOnly}
          readOnly={!readOnly}
          {...form.getInputProps("title")}
          classNames={{ input: `task-title ${readOnly ? "editing" : "preview"}` }}
          style={{ flexGrow: 100 }}
        />
        <ActionIcon color="dark" size="lg" onClick={() => resolver()}>
          <IconX />
        </ActionIcon>
      </Group>

      <Textarea
        mt="md"
        label="Description"
        autosize
        data-autofocus
        readOnly={!readOnly}
        {...form.getInputProps("description")}
        classNames={{ input: `${readOnly ? "editing" : "preview"}` }}
        styles={{ label: { fontWeight: "bold" } }}
      />

      <Group position="right" mt="md">
        {readOnly && (
          <Button type="submit" color={resolved ? "green" : ""} size="md">
            {resolved ? <IconCheck /> : "Save"}
          </Button>
        )}
        {!readOnly && (
          <>
            <ActionIcon
              color="dark"
              variant="outline"
              size="xl"
              children={<IconPencil />}
              onClick={() => setReadOnly(true)}
            />
            <ActionIcon color="red" variant="filled" size="xl" children={<IconTrash />} />
          </>
        )}
      </Group>
    </form>
  )
}

export default TaskEditor
