import { DataItem } from "./data";
import { GameStatus } from "./gamestatus";

class Game {
  playerCount: number;
  gameStatus: GameStatus;
  mrWhite: boolean;
  undercover: number;
  usedWords: DataItem[];
  wordPool: DataItem[];

  constructor(
    playerCount: number,
    gameStatus: GameStatus,
    mrWhite: boolean,
    undercover: number,
    usedWords: DataItem[] = [],
    wordPool: DataItem[] = []
  ) {
    this.playerCount = playerCount;
    this.gameStatus = gameStatus;
    this.mrWhite = mrWhite;
    this.undercover = undercover;
    this.usedWords = usedWords;
    this.wordPool = wordPool;
  }
}

export default Game;
