import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()

    this.state ={
      item: '',
      array: [],
      starWarsData: ''
    }

    this.addToList = this.addToList.bind(this)

  }

  componentDidMount(){
    axios.get('https://swapi.co/api/people/1').then((res) => {
      console.log(res.data)
      this.setState({starWarsData: res.data})
    })
  }

  addToList(){
    let item= this.state.item;
    let arr2 = this.state.array.slice()
    arr2.push(item)
    this.setState({
      array: [...this.state.array, this.state.item]
    })
  }
  render() {

    
    var listOfFilms =  this.state.starWarsData.films ? this.state.starWarsData.films.map((film) => {
      return(
        <li>{film}</li>
      )
    }) : 'loading'
    
    console.log(this.state)
    return (
      <div className="App">
        <input onChange={(e)=> {this.setState({item: e.target.value})}} placeholder='list item' />
        <button onClick={this.addToList}>Add to list</button>
        <List list={this.state.array} />
        <ul>
          {listOfFilms}
        </ul>
      </div>
    );
  }
}

export default App;
