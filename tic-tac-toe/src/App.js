import React from "react"
import Game from "./components/Game"
import "./App.css"

const App = () => {
  return (
    <>
      <div className="header">
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="App">
        <Game />
      </div>
    </>
  )
}

export default App
