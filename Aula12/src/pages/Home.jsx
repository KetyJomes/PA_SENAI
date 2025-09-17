import { Link } from "react-router-dom"

export const Home = () =>{
    return(
         //Link para navegar para a About
        <>
        <h1>Componente Home</h1>
        <Link to={'/about'}>Navegar para About</Link>
        </>
    )
}