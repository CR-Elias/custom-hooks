import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter,setCounter] = useState(initialValue)

    const increment = (value = 1) =>{
        setCounter((current) => current+value);
    }
    const decresement = (value = 1) =>{
        counter<=0 ? null : setCounter((current) => current-value) ;
    }

    const reset = () =>{
        setCounter(initialValue);
    }


    return{
        counter,
        increment,
        decresement,
        reset
    }
}