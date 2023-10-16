import { Container, Navbar, Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

    return (
        <Navbar
            className="bg-secondary bg-gradient p-3"
            variant="dark"
        >
            <Container className="d-flex justify-content-between">
                <div>
                    <Navbar.Brand>
                    <Image src="../src/assets/img/logo.svg" alt="Logo" className="logo"/>
                    </Navbar.Brand>
                </div>
                <div>
                    <NavLink
                        to="/"
                        className={setActiveClass}
                    >
                    Home </NavLink>

                    <NavLink
                        to="/pokemones"
                        className={setActiveClass}
                    > 
                    Pokemones
                    </NavLink>
                </div>
            </Container>
        </Navbar>
    )
}
export default Navigation;