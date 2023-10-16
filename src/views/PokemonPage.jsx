import { Container } from "react-bootstrap"

import Content from "../components/Content"

const PokemonPage = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
      <h2><span className="fw-bold">SELECCIONA UN POKEMON</span></h2>
      <Content />
    </Container>
  )
}

export default PokemonPage;