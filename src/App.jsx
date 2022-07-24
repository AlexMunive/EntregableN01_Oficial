import { useState } from 'react'
import './App.css'
import QuoteBox from './componets/QuoteBox'
import quotes from "./jason/quotes.json"
import colors from './utils/colors'

function App() {

  const getElementRandom = quotes =>{   

    const indexRandom = Math.floor(Math.random()*quotes.length)

    return quotes[indexRandom]   
    
  }

  const quotesRamdon=getElementRandom(quotes)
  const colorRandom=getElementRandom(colors)

  const [randomQuotes, setRandomQuotes] = useState(quotesRamdon)
  const [randomColors, setRandomColors] = useState(colorRandom)

  const objStyle = {
    backgroundColor: randomColors,
  }
  
  const getRamdonAll=()=>{
    const usersRamdon=getElementRandom(quotes)
    const colorRandom=getElementRandom(colors)

    setRandomQuotes(usersRamdon)
    setRandomColors(colorRandom)

  }

  return (
    <div className="App" style={objStyle}>
      <QuoteBox
      randomQuotes={randomQuotes}
      randomColors={randomColors}
      getRamdonAll={getRamdonAll}
      />
      
    </div>
  )
}

export default App
