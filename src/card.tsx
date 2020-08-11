import React from "react"
import { CardContainer } from "./styles"

interface IcardProps {
  text: string
}

export const Card = function ({ text }: IcardProps) {
  return <CardContainer>{text}</CardContainer>
}
