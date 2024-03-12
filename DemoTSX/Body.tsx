import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Body = ({onSubmit}:{onSubmit: (inputValue:string)=> void}) => {
    const [inputValue,setInputValue] = useState('')
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        onSubmit(inputValue)
        setInputValue('')
    }
   return (
    <main>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                
            </label>
            <button type='submit'>submit</button>
        </form>
    </main>
  )
}

export default Body