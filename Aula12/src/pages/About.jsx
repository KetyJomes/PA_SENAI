import { useNavigate } from "react-router-dom"

export const About = () =>{

    // Função que ao clicar no botão navega para a Home
    const navigate = useNavigate()

    const handNavigate = () =>{
        alert("TESTE")
        console.log("Navegar")
        navigate('/')
    }

    return(
        <>
        <h1>Componente About</h1>
        <button onClick={() => navigate('/')}>Clique aqui para navegar para Home</button>
        </>
    )
}