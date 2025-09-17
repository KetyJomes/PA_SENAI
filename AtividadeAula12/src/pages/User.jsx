import {useParams} from "react-router-dom"

export const User = () =>{
    
    const {id} = useParams();

    if(id == 1){
        return(
            <h1>Admin</h1>
        )  
    }else{
        return(
            <h1>Usuário comum</h1>
        )
    }

}