import React from "react"
import { ColumnContainer, ColumnTitle } from "./styles"
import { AddNewItem } from "./addnewitem"

interface IcolProps {
  text: string
}

export const Column = function ({ text, children }: React.PropsWithChildren<IcolProps>) {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark />
    </ColumnContainer>
  )
}
