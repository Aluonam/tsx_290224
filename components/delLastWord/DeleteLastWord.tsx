import React, { useState } from 'react'

const DeleteLastWord = () => {

    const [inputUser, setInputUser] = useState<string>()
    const [newSentence, setNewSentence] = useState<string[]>()

    const handleDelWord = ()=>{
        const wordByWord = inputUser?.split(" ")
        const onlyLastWord = wordByWord?.splice(0,wordByWord.length-1)
        console.log(onlyLastWord)
    }

  return (
    <div>
        <h3>Modifica la frase eliminando la última palabra</h3>
        <input onChange={(e)=>{setInputUser(e.target.value)}} value={inputUser}></input>
        <button onClick={()=>{handleDelWord()}}>modificar</button>
    </div>
  )
}

export default DeleteLastWord