import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters: [],
    score: 0,
    topScore: 0,
    results: "",
    guesses: []
  };

  componentDidMount() {
    this.renderCharacters(characters);
  }

  renderCharacters(character) {
    this.setState({characters: character})
  }

  handleClick = (id) => {
    const guessArray = this.state.guesses.slice();
    if (guessArray.includes(id)){
      this.setState({result: "Winter is here, sorry 😢"});
      const score = this.state.score;
      const topScore = this.state.topScore;
      if (score > topScore){
        this.setState({topScore: score})
      }
      this.setState({score: 0, guesses: []});
    } else {
    this.setState({result: "Winter isn't here yet, keep clicking!"});
    const newScore = this.state.score + 1
    this.setState({score: newScore});
    guessArray.push(id);
    this.setState({guesses: guessArray});
    let newFriends = this.shuffleArray(this.state.characters)
    this.renderCharacters(newFriends);
  }};

  shuffleArray = array => {
    array.sort(function(a, b){return 0.5 - Math.random()})
    return array;
  }

  
  render() {
    return (
      <div>
      <NavBar score={this.state.score} topScore={this.state.topScore} result={this.state.result}>Game of Clicks</NavBar>
      <div className="container">
        <Wrapper>
          {this.state.characters.map(character => (
            <ImageCard
              id={character.id}
              key={character.id}
              image={character.image}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
      </div>
    )
  }
}

export default App;
