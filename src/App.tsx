import * as React from "react"

import "./App.css"
import { Column } from "./column"
import { Card } from "./card"
import { AppContainer } from "./styles"
import { AddNewItem } from "./addnewitem"

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <AppContainer>
        <Column text="To Do">
          <Card text="Generate app scaffold"></Card>
        </Column>
        <Column text="In Progress">
          <Card text="Learn Typescript"></Card>
        </Column>
        <Column text="Done">
          <Card text="Being to use static typing"></Card>
        </Column>
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
      </AppContainer>
    )
  }
}
