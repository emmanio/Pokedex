import React, {Component} from 'react'
import './styles/App.css'

import PokeList from './PokeList.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="App">
      <PokeList/>
      </div>
    )
  }
}

export default App
