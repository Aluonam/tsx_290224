import React, { useState } from 'react'

const ChangeSpaces = () => {

    const [userSentence, setUserSentence] = useState<string>()
    const [newSentence, setNewSentence] = useState<string>()

    const changeSpace = ()=>{
        const separate = userSentence?.split(" ")
        const union = separate?.join("_")
        setNewSentence(union)
    }

  return (
    <div>
        <h3>Cambia los espacios de la frase por _</h3>
        <input onChange={(e)=>{setUserSentence(e.target.value)}} value={userSentence}></input>
        <button onClick={()=>{changeSpace()}}>Cambiar</button>
        <h4>{newSentence}</h4>
        
    </div>
  )
}

export default ChangeSpaces