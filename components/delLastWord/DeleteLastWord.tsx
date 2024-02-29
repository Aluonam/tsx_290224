import React, { useState } from 'react'

const DeleteLastWord = () => {

    const [inputUser, setInputUser] = useState<string>()
    const [newSentence, setNewSentence] = useState<string[]>()


  return (
    <div>
        <h3>Modifica la frase eliminando la última palabra</h3>
        <input onChange={(e)=>{setInputUser(e.target.value)}} value={inputUser}></input>
        <button>modificar</button>
    </div>
  )
}

export default DeleteLastWord