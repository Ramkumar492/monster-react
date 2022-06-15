
import './App.css';
import { Component } from 'react';

import { CardList } from './components/Card-List/Card-List.component';
import { Search } from './components/SearchBox/SearchBox.component';



class App extends Component {

  constructor(){
    super()

    this.state={
      pokemons: [
        
      ],
      searchField: ""
    }
  }
  componentDidMount(){

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(data=> this.setState( {pokemons: data }));

  }
  setSearchState = (e)=>{
    this.setState({searchField:e.target.value});
  }
 
  render(){
     const {pokemons,searchField}= this.state;
     const filteredPokemons = pokemons.filter((pokemon)=>{
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
     })

    return (
      <div className="App">
        <header className="App-header">
        <h1 className='heading'>Monster Rolodex</h1>
      
    <Search placeholder='Search Pokemons' onchange={this.setSearchState} />
          <CardList pokemons ={filteredPokemons}/>
         
        </header>
      </div>
    );
  }
  
 
}

export default App;
