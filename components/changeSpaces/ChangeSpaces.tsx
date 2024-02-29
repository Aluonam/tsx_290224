import React, { useState } from 'react'

const ChangeSpaces = () => {

    const [userSentence, setUserSentence] = useState<string>()

  return (
    <div>
        <h3>Cambia los espacios de la frase por _</h3>
        <input onChange={(e)=>{setUserSentence(e.target.value)}} value={userSentence}></input>
        <button onClick={()=>{console.log(userSentence)}}>Cambiar</button>
    </div>
  )
}

export default ChangeSpaces