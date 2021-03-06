import React, { useState } from "react"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"

interface newItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = function (props: newItemFormProps) {
  const [text, setText] = useState("")

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)}></NewItemInput>
      <NewItemButton onClick={() => props.onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}
