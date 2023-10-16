import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DataContext } from "../context/DataContext"

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Content = () => {
    const { pokemonList } = useContext(DataContext)
    const { pokemonSelected, setPokemonSelected } = useContext(DataContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/pokemon/${pokemonSelected}`)
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className="escoger">
                    <select className="form-select mb-3" aria-label="Elige un Pokemon" onChange={({ target }) => setPokemonSelected(target.value)}>
                        <option value="">Pokemones</option>
                        {pokemonList.map((pokemon) => (
                            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                        ))}
                    </select>
                </div>
                <Button className="detalle" variant="dark" type="submit">
                    Ver Detalle
                </Button>
            </Form>
        </>
    )
}

export default Content;