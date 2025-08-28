import'./square.css'

export const Square = ({cor}) => {
  return(
    
      <div className='Square' style={{background: cor}}></div> /* Isso serve para você não precisar fazer um arquivo para cada cor quem nem fizemos no azul. */
    
  )
}