import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Row, Col, Image } from "react-bootstrap"

const Tarjeta = () => {
    const [pokemonData, setPokemonData] = useState({})
    const { name } = useParams()

    try {
        const getPokemonData = async () => {
            const API_URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/" + name
            const response = await fetch(API_URL_POKEMON)
            if (response.status != 200) {
                throw new Error
            }
            const data = await response.json()
            const nombre = data.name
            const id = data.id
            const src = data.sprites.other.dream_world.front_default
            let types
            if (data.types.length === 1) {
                types = data.types[0].type.name
            }
            else {
                types =  data.types[0].type.name+ "," + data.types[1].type.name
            }
            const stats = data.stats.map((stat) => ({
                name: stat.stat.name,
                base: stat.base_stat
            }))
            setPokemonData({ id, nombre, src, types, stats })

        }
        useEffect(() => {
            getPokemonData()
        }, [])
    }
    catch (Error) {
        alert({ Error })
    }
    const newObject = {
        id: pokemonData.id,
        pokename: pokemonData.nombre,
        img: pokemonData.src,
        stats: pokemonData.stats?.map((stat, i) => (
            <li key={i}>
                {stat.name}: {stat.base}
            </li>
        )),
        type: pokemonData.types,
    }
    const { id, pokename, img, stats, type } = newObject

    return (
        <Row key={id} className="border rounded p-3 align-items-center" style={{ width: '60%', margin:'80px'}}>
            <Col className="col-6">
                <Image variant="top" src={img} />
            </Col>
            <Col className="col-6">
                <h3>{pokename}</h3>
                <ul>{stats}</ul>
                <ul><li>Tipo: {type}</li></ul>
            </Col>
        </Row>
    )
}

export default Tarjeta;