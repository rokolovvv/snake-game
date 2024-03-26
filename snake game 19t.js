class Snake {
    constructor() {
      this.body = [[1, 6], [1, 7], [1, 8], [1, 9], [2, 9]];
      this.direction = 'right';
    }
  }
class GameResults {
    constructor() {
      this.currentLength = 5;
      this.freeCells = 95;
      this.level = 1;
    }
  }
const snake = new Snake();
const gameResults = new GameResults();
  
  console.log('Snake body:', snake.body);
  console.log('Snake direction:', snake.direction);
  console.log('Game results - length:', gameResults.currentLength);
  console.log('Game results - free cells:', gameResults.freeCells);
  console.log('Game results - level:', gameResults.level);