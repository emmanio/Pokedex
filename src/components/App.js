import React, {Component} from 'react'
import './styles/App.css'

import PokeList from './PokeList.js'
import DetailView from './DetailView.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick (id) {
    console.log(id)
  }
  render () {
    return (
      <div className="App">
      <PokeList handleClick={this.handleClick}/>
      <DetailView/>
      </div>
    )
  }
}

export default App
