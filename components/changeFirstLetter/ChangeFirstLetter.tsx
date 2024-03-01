import React, { useState } from 'react'

const ChangeFirstLetter = () => {

    const [userSentence, setUserSentence] = useState<string>("")
    const [newSentence, setNewSentence] = useState<string>()

    const handleChangeFirstCharacter = ()=>{
        const arrSentence: string[] = userSentence.split(" ");
        const newArr = arrSentence.map((oneWord)=>{
            const letters = oneWord.split("")
            letters[0] = letters[0].toUpperCase()

            return(letters.join(""))
        })
        setNewSentence(newArr.join(" "))
    }

  return (
    <div>
        <h3>Pon la primera letra de cada palabra en mayúsculas</h3>
        <input onChange={(e)=>{setUserSentence(e.target.value)}} value={userSentence}></input>
        <button onClick={()=>{handleChangeFirstCharacter()}}>modificar</button>
        <h4>{newSentence}</h4>
    </div>
  )
}

export default ChangeFirstLetter