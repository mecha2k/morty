import React, { useState } from "react"
import { AddItemButton } from "./styles"
import { NewItemForm } from "./newitemform"

interface addNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}

export const AddNewItem = function (props: addNewItemProps) {
  const [showForm, setShowForm] = useState(false)
  const { onAdd, toggleButtonText, dark } = props

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
      <button
        onClick={() => {
          setShowForm(true)
        }}>
        {toggleButtonText}
      </button>
    </AddItemButton>
  )
}
