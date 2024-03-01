import React, { useState } from 'react'

const ChangeFirstLetter = () => {

    const [userSentence, setUserSentence] = useState<string | undefined>()
    const [newSentence, setNewSentence] = useState<string[]>()
  return (
    <div>
        <h3>Pon la primera letra de cada palabra en mayúsculas</h3>
        <input onChange={(e)=>{e.target.value}}></input>
        <button onClick={()=>{}}>modificar</button>
    </div>
  )
}

export default ChangeFirstLetter