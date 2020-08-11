import React from "react"
import { ColumnContainer, ColumnTitle } from "./styles"

interface IcolProps {
  text: string
}

export const Column = function ({ text, children }: React.PropsWithChildren<IcolProps>) {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}
