// react
import { useState } from "react";


function Converter (){

  const [text, setText] = useState("")

  function onChange(event){
    setText(event.target.value)
  }

  function upperCase(){
    setText(text.toUpperCase())
  }

  function lowerCase(){
    setText(text.toLowerCase())
  }

  function phraseCase(){
    setText(text[0].toUpperCase() + text.slice(1).toLowerCase())
  }

  function titleCase(){
    setText(text.toLowerCase().replace(/(?:^|\s)\S/g, 
    function(a){
      return a.toUpperCase()
    }))
  }

  function alternatingCase(){
    let letters = text.toLowerCase().split("")
    for (let i = 0; i < letters.length; i = i + 2){
      letters[i] = letters[i].toUpperCase()
    }
    setText(letters.join(''))
  }

  function reverse(){
    let lettersReverse = text.split("").reverse()
    setText(lettersReverse.join(''))
  }

  async function copy(){
    await navigator.clipboard.writeText(text)
  }


  function clear(){
    setText("")
  }
  
  return(
    <>
      <h1>Text Formatting</h1>
      
      <textarea name="text" id="text" cols="100" rows="10" value={text} onChange={onChange}></textarea>

      <button onClick={upperCase}>MAIÚSCULAS</button>

      <button onClick={lowerCase}>minúsculas</button>
      <button onClick={phraseCase}>Frase</button>
      <button onClick={titleCase}>Título</button>
      <button onClick={alternatingCase}>AlTeRnAdAs</button>
      <button onClick={reverse}>Reverter</button>
      <button onClick={copy}>Copiar</button>
      <button onClick={clear}>Limpar</button>
    </>
  )
}

export default Converter;