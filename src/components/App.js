import React, {Component} from 'react'
import './styles/App.css'

import PokeList from './PokeList.js'
import DetailView from './DetailView.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="App">
      <PokeList/>
      <DetailView/>
      </div>
    )
  }
}

export default App
