import {IPiece} from "./IPiece";

export interface IField {
  name: string;
  isFieldColorWhite: boolean;
  piece?: IPiece;
}
