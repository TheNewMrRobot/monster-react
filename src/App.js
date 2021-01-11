import React, { Component } from 'react'
import CardList from './Components/Card-list/CardList';
import SearchBox from './Components/Search-Box/SearchBox';
import "./App.css"

 class App extends Component {
  constructor(props){
    super();
    this.state = {
        monsters:[],
        searchField:""
    }

    //this.handleSearch = this.handleSearch.bind(this);

}

componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(result => result.json())
    .then(monster => this.setState({monsters:monster}));
}

  //arrow functions works without bind the function
  handleSearch = (e) =>{
    this.setState({searchField:e.target.value});
  }

  //this is not working bcz u have to bind this as function like above in constructor
 // handleSearch(e){
     //console.log(this);
    // this.setState({searchField:e.target.value});
 // }
 
render() {
  const {monsters, searchField} = this.state;
 // console.log(this.handleSearch);
  const filterdMonsters = monsters.filter(monster => 
   monster.name.toLowerCase().includes(searchField.toLowerCase())
  )
    return (
        <div className="app">
          <h1>Monsters Search</h1>
          <SearchBox placeholder="search monsters" handleSearch={this.handleSearch}/>
          <CardList monsters={filterdMonsters}/>
        </div>
    )
}
}


export default App;
