import React, { Component } from 'react'
import './styles/App.css'

import PokeList from './PokeList.js'
import DetailView from './DetailView.js'
import Pokemon from '../Pokemon.js'

class App extends Component {
  state = {
    pokemon: {}
  }

  handleClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data)
        this.setState({ pokemon })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <PokeList handleClick={() => this.handleClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default App
