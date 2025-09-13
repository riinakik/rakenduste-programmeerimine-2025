import { useState } from "react"
import "../App.css"

function Dice() {
  const [dice, setDice] = useState(0)

  function rollDice() {
    const value = Math.floor(Math.random() * 6) + 1
    setDice(value)
  }

  return (
    <>
      <div className="card">
        <button onClick={rollDice}>Veereta täringut</button>
        <h2>Täringu väärtus: {dice}</h2>
      </div>
    </>
  )
}

export default Dice
