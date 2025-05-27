import { useState } from 'react'
import { Button } from './Components'
import './App.css'



function App() {
  
const [count, setCount] = useState(0)

const [countB, setCountB] = useState(0)

// en este caso setCountB se ejecuta 5 veces y se renderiza una vez
// pero en cada llamada a setCountB  se ejecuta la función que le pasamos
// por lo que el valor final de countB es 5, esto es porque cada setCountB
// recibe el valor actual de countB y le suma 1, y aca si va a sumar de 5
// porque el valor de countB es pasado por parametro en cada ejecucion de 
// la funcion flecha que contiene  setCountB, por lo que al final
// countB es 5, ya que se ha ejecutado 5 veces la función que le pasamos

const countMoreB = () => {
  setCountB((countB) => countB + 1)
  setCountB((countB) => countB + 1)
  setCountB((countB) => countB + 1)
  setCountB((countB) => countB + 1)
  setCountB((countB) => countB + 1)
}

// en este caso setCount se ejecuta 5 veces y se renderiza una vez
// pero en cada llamada a setCount count esta tomando el valor de el render actual
// que al no re-renderizarse en cada llamada, siempre toma el valor cero y 
// le suma 1 por lo que su valor final va a ser 1
const countMore = () => {
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
}

  return (
    <>
       <Button label={`Count is ${count}`} parentMethod={countMore}/>     
       <Button label={`Count B is ${countB}`} parentMethod={countMoreB}/>     

    </>
  )
}

export default App
