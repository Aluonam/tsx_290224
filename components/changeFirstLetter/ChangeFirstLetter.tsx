import React, { useState } from 'react'

const ChangeFirstLetter = () => {

    const [userSentence, setUserSentence] = useState<string | undefined>()
    const [newSentence, setNewSentence] = useState<string[]>()

    const handleChangeFirstCharacter = ()=>{
        const arrSentence = userSentence?.split(" ");
        const newArr = arrSentence?.map((oneWord)=>{
            const letters = oneWord.split("")
            const firstLetter = letters.at(0)
            return(firstLetter)
        })
        console.log(newArr)
    }

  return (
    <div>
        <h3>Pon la primera letra de cada palabra en mayúsculas</h3>
        <input onChange={(e)=>{setUserSentence(e.target.value)}} value={userSentence}></input>
        <button onClick={()=>{handleChangeFirstCharacter()}}>modificar</button>
    </div>
  )
}

export default ChangeFirstLetter