import {IField} from "./IField";

export interface IBoard {
  board: IField[][];
  povColor: string;
  moveCount: number;
  colorToMove: string;
}
