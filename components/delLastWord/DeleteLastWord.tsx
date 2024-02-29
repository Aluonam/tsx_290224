import React, { useState } from 'react'

const DeleteLastWord = () => {

    const [inputUser, setInputUser] = useState<string>()
    const [newSentence, setNewSentence] = useState<string[]>()


  return (
    <div>
        <h3>Modifica la frase eliminando la última palabra</h3>
        <input></input>
        <button>modificar</button>
    </div>
  )
}

export default DeleteLastWord