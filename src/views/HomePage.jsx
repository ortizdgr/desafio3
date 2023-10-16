import { Image, Container } from "react-bootstrap"

const HomePage = () => {

  return (
    <Container className="text-center">
      <h2 className="pt-5"> Bienvenido </h2>
      <h1> <span className="fw-bold">MAESTRO POKEMON</span></h1>
      <div><Image className="poke" src="src/assets/img/home.png" width={'30%'}/></div>
    </Container>
  )
}
export default HomePage;
