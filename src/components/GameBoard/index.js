import React, { Component } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import './index.scss';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            winner: false,
            numbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,false]
          };
        this.newGame = this.newGame.bind(this);
    }

    componentWillMount() {
      this.newGame(this.state.numbers);
    }

    newGame() {
      let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,false];

      for (let i = numbers.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
    }
    this.setState({
      numbers
    })
  }

  moveTile(numbers, fromIndex, toIndex) {
    let temp = numbers[fromIndex];
    numbers[fromIndex] = numbers[toIndex];
    numbers[toIndex] = temp;
  }

  checkIfWinner(numbers) {
    for (let i = 0, l = numbers.length; i < l; i++) {
      if (numbers[i] !== i) {
        
        this.setState({
          winner: !this.state.winner
      })
        
      }
    }
  }

  render() {
    const numbers = this.state.numbers;
    
    return (
      <div className="game-board">
        <div className="game-board__tile-wrapper">
          {numbers.map((item,i) => <Button key={i} label={item} value={item} onClick={this.handleInputChange} />)}
        </div>

        <Button label={'Shuffle'} color='green' onClick={this.newGame} />

        {this.state.winner && <Modal onClick={() => this.setState({ winner: !this.state.winner})} message={'You win! hurray'}/>}
      </div>
    );
  }
}

export default GameBoard;