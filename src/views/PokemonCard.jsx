import { Container } from "react-bootstrap"

import Tarjeta from "../components/Tarjeta"

const PokemonCard = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
            <h1><span className="fw-bold">POKEMON</span></h1>
            <Tarjeta />
        </Container>
    )
}

export default PokemonCard;