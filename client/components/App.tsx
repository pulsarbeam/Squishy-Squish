import Canvas from './main'
import Home from './Home'
import Name from './Name'
import Lives from './Lives'
import Armour from './Armour'
import gameSlice from '../slices/gameSlice'
import { useAppSelector } from '../hooks'

import { useState } from 'react'

function App() {
  const gameSlice = useAppSelector((state) => state.game)

  return (
    <div>
<<<<<<< HEAD
      {getViewToRender()}
      {gameSlice.inputName && <Name />}
=======
      {<Lives />}
      {<Armour />}
      {<Home />}
      {gameSlice.dead && <Name />}
>>>>>>> master
      {<Canvas />}
    </div>
  )
}

export default App
