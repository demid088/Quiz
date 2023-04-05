import Game from '../Game/Game'

import css from './App.module.scss'

function App() {
  

  return (
    <div className={css.App}>
      <div className={css.game}>
        <Game />
      </div>
    </div>
  )
}

export default App
