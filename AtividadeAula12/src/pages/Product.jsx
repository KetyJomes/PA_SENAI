import {useNavigate, useParams} from "react-router-dom"

export const Product = () =>{
    
    const {id, category} = useParams();

        return(
            <h1>Categoria: {category} - Produto: {id} </h1>
        )  

}