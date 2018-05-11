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
    results: false,
    guesses: []
  };

  handleClick = (id) => {
    const newStateArray = this.state.guesses.slice();
    if (newStateArray.includes(id)){
      const score = this.state.score;
      const topScore = this.state.topScore;
      if (score > topScore){
        this.setState({topScore: score})
      }
      this.setState({score: 0, guesses: []});
    } else {
    const newScore = this.state.score + 1
    this.setState({score: newScore});
    newStateArray.push(id);
    this.setState({guesses: newStateArray});
    let newFriends = this.shuffleArray(this.state.friends)
    this.renderFriends(newFriends);
  }};

  shuffleArray = array => {
    array.sort(function(a, b){return 0.5 - Math.random()})
    return array;
  }

  componentDidMount() {
    this.renderFriends(friends);
  }

  renderFriends(friend) {
    this.setState({friends: friend})
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
