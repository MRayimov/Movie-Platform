import React from "react"
import { DesktopNavbar } from "../Navbar"
import { Footer } from "../Footer"
import styled from "styled-components"

const Container = styled(`div`)`
  color: black;
  width: 100%;
  background-color: #10272f;
  margin: 0;
`

interface Props {
  children: JSX.Element | JSX.Element[]
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <DesktopNavbar />
      {children}
      <Footer />
    </Container>
  )
}

export default BaseLayout
