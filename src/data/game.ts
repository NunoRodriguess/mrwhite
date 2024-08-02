import { DataItem } from "./data";
import { GameStatus } from "./gamestatus";
import _ from 'lodash';


const getRandomElement = (arr: any[]) =>
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined

class Game {
  playerCount: number;
  gameStatus: GameStatus;
  mrWhite: boolean;
  undercover: number;
  word: DataItem;
  usedWords: DataItem[];
  wordPool: DataItem[];
  order: number[];
  cards: string[];
  choosing: number;

  constructor(
    playerCount: number,
    gameStatus: GameStatus,
    mrWhite: boolean,
    undercover: number,
    usedWords: DataItem[] = [],
    wordPool: DataItem[] = [],
    order: number[] = [],
    cards: string[] = [] // undercover, mrWhite, normal, unused, voted
  ) {
    this.playerCount = playerCount;
    this.gameStatus = gameStatus;
    this.mrWhite = mrWhite;
    this.undercover = undercover;
    this.word = { word : "", undercover : "" };
    this.usedWords = usedWords;
    this.wordPool = wordPool;
    this.order = order
    this.choosing = 0;
    this.cards = cards
  }
  generateRound() {
    // Initialize cards array with "Normal"
    this.cards = Array.from({ length: this.playerCount }, () => "Normal");

    this.order= Array.from({ length: this.playerCount }, () => -1);

    // Create and shuffle array with indices
    const arrayWithIndices: number[] = Array.from({ length: this.playerCount }, (_, i) => i);
    const shuffledArray: number[] = _.shuffle(arrayWithIndices);

    // Set undercover cards
    for (let i = 0; i < this.undercover; i++) {
      this.cards[shuffledArray[i]] = "Undercover";
    }

    // Set mrWhite card if applicable
    if (this.mrWhite) {
      this.cards[shuffledArray[this.undercover]] = "White";
    }

    // Move a random word from wordPool to usedWords
     if (this.wordPool.length === 0) {
      this.wordPool = this.usedWords;
      this.usedWords = [];
    }
  
      const randomWord = getRandomElement(this.wordPool);
      if (randomWord !== undefined) {
        this.word = randomWord;

        // Remove the selected word from wordPool and add it to usedWords
        this.wordPool = this.wordPool.filter(word => word !== randomWord);
        this.usedWords.push(randomWord);
      }
  
    console.log(this);
  }
  chooseCard(choosedCard:number) {
    // Initialize cards array with "Normal"
    if (this.order[choosedCard] ===- 1)
      this.order[choosedCard] = this.choosing++; 
    console.log(this);
  }
}
  


export default Game;
