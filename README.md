## Ejercicios con TypeScript y React


1. **Modifica la frase eliminando la última palabra**
Añade operador ternario para comprobar si llega undefined devuelve array vacio. 

``` javascript 
 const handleDelWord = ()=>{
        const wordByWord: string[] | undefined= inputUser?.split(" ")
        const delLastWord: string[]= wordByWord? wordByWord.slice(0,wordByWord.length-1) : []; 
        // OPERADOR TERNARIO: Comprueba si wordByWord tiene un valor diferente de undefined, si es true ejecuta el slice sino devuelve un array vacio
        const newSentence: string = delLastWord.join(" ")
        setNewSentence(newSentence)
        setInputUser("")
    }
```
   

2. **Cambia los espacios de la frase por _**

``` javascript
    const changeSpace = ()=>{
        const separate = userSentence?.split(" ")
        const union = separate?.join("_")
        setNewSentence(union)
    }
```

3. **Pon la primera letra de cada palabra en mayúsculas**
Es importante la sustitución de la posición 0 (la primera letra de cada palabra) por la letra en mayúsculas: *letters[0] = letters[0].toUpperCase()*
``` javascript 
    const handleChangeFirstCharacter = ()=>{
        const arrSentence: string[] = userSentence.split(" ");
        const newArr = arrSentence.map((oneWord)=>{
            const letters = oneWord.split("")
            letters[0] = letters[0].toUpperCase()

            return(letters.join(""))
        })
        setNewSentence(newArr.join(" "))
    }
```