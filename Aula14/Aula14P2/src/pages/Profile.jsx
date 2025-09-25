import {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Profile(){
    const location = useLocation();
    const {user} = location.state || {};

    if (!user) return <p>Nenhum usuário selecionado</p>

    return(
        <div>
            <h2>Perfil do Usuário</h2>
            <p>Nome:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Telofone:{user.phone}</p>
        </div>
    )
}

export default Profile