
const trocarCor = () => { 
    let quadrado = document.getElementById('quadrado')

    if(quadrado.classList.contains('ok')){
        quadrado.classList.remove('ok')
        quadrado.classList.add('bad')
    }
       
    else{
        quadrado.classList.remove('bad')
        quadrado.classList.add('ok')
    }
    }
        




