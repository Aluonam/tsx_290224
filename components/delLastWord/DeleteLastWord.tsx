import React, { useState } from 'react'

const DeleteLastWord = () => {

    const [inputUser, setInputUser] = useState<string>()
    const [newSentence, setNewSentence] = useState<string>()

    const handleDelWord = ()=>{
        const wordByWord: string[] | undefined= inputUser?.split(" ")
        const delLastWord: string[]= wordByWord? wordByWord.slice(0,wordByWord.length-1) : []; // OPERADOR TERNARIO: Comprueba si wordByWord tiene un valor diferente de undefined, si es true ejecuta el slice sino devuelve un array vacio
        const newSentence: string = delLastWord.join(" ")
        setNewSentence(newSentence)
        setInputUser("")
    }
    
  return (
    <div>
        <h3>Modifica la frase eliminando la última palabra</h3>
        <input onChange={(e)=>{setInputUser(e.target.value)}} value={inputUser}></input>
        <button onClick={()=>{handleDelWord()}}>modificar</button>
        <h4>{newSentence}</h4>
    </div>
  )
}

export default DeleteLastWord