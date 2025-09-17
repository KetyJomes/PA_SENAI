import {useParams} from "react-router-dom"

export const User = () =>{
    
    const {id} = useParams();
        return(
            <h1>User {id} </h1>
        )  

}