import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const API_URL = "https://pokeapi.co/api/v2/pokemon/"

  const [pokemonList, setPokemonList] = useState([])
  const [pokemonSelected, setPokemonSelected] = useState('')

  try {
    const getPokemonAPI = async () => {
      const response = await fetch(API_URL)
      if (response.status != 200) {
        throw new Error
      }
      const data = await response.json()
      setPokemonList(data.results)
    }
    useEffect(() => {
      getPokemonAPI()
    }, [])
  }
  catch (Error) {
    alert({Error})
}

    return (
      <DataContext.Provider value={{ pokemonList, setPokemonList, pokemonSelected, setPokemonSelected }}>
        {children}
      </DataContext.Provider>
    )
  }
  export default DataProvider;