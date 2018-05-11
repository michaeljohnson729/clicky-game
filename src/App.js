import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends: [],
    score: 0,
    topScore: 0,
    results: "",
    guesses: []
  };

  componentDidMount() {
    this.renderFriends(friends);
  }

  renderFriends(friend) {
    this.setState({friends: friend})
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
    let newFriends = this.shuffleArray(this.state.friends)
    this.renderFriends(newFriends);
  }};

  shuffleArray = array => {
    array.sort(function(a, b){return 0.5 - Math.random()})
    return array;
  }

  
  render() {
    return (
      <div className="container">
        <Title score={this.state.score} topScore={this.state.topScore} result={this.state.result}>Game of Clicks</Title>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
