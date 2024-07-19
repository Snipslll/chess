import { Injectable } from '@angular/core';
import {IBoard} from "./classes/IBoard";
import {IPiece} from "./classes/IPiece";
import {IField} from "./classes/IField";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  Board!: IBoard;

  constructor() {
    this.resetBoard();
  }

  resetBoard() {
    this.Board = {
      povColor: 'white',
      colorToMove: 'white',
      moveCount: 0,
      board: [
        [
          {
            piece: {
              name: 'rb1',
              color: 'black',
              role: 'rook',
              src: 'assets/pieces/rook-b.svg'
            },
            name: 'a8',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'nb1',
              color: 'black',
              role: 'knight',
              src: 'assets/pieces/knight-b.svg'
            },
            name: 'b8',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'bb1',
              color: 'black',
              role: 'bishop',
              src: 'assets/pieces/bishop-b.svg'
            },
            name: 'c8',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'qb1',
              color: 'black',
              role: 'queen',
              src: 'assets/pieces/queen-b.svg'
            },
            name: 'd8',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'kb1',
              color: 'black',
              role: 'king',
              src: 'assets/pieces/king-b.svg',
              moved: false,
              isChecked: false
            },
            name: 'e8',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'bb2',
              color: 'black',
              role: 'bishop',
              src: 'assets/pieces/bishop-b.svg'
            },
            name: 'f8',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'nb2',
              color: 'black',
              role: 'knight',
              src: 'assets/pieces/knight-b.svg'
            },
            name: 'g8',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'rb2',
              color: 'black',
              role: 'rook',
              src: 'assets/pieces/rook-b.svg'
            },
            name: 'h8',
            isFieldColorWhite: false
          },
        ],
        [
          {
            piece: {
              name: 'pb1',
              color: 'black',
              role: 'pawn',
              src: 'assets/pieces/pawn-b.svg',
              moved: false
            },
            name: 'a7',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'pb2',
              color: 'black',
              role: 'pawn',
              src: 'assets/pieces/pawn-b.svg',
              moved: false
            },
            name: 'b7',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'pb3',
              color: 'black',
              role: 'pawn',
              src: 'assets/pieces/pawn-b.svg',
              moved: false
            },
            name: 'c7',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'pb4',
              color: 'black',
              role: 'pawn',
              src: 'assets/pieces/pawn-b.svg',
              moved: false
            },
            name: 'd7',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'pb5',
              color: 'black',
              role: 'pawn',
              src: 'assets/pieces/pawn-b.svg',
              moved: false
            },
            name: 'e7',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'pb6',
              color: 'black',
              role: 'pawn',
              src: 'assets/pieces/pawn-b.svg',
              moved: false
            },
            name: 'f7',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'pb7',
              color: 'black',
              role: 'pawn',
              src: 'assets/pieces/pawn-b.svg',
              moved: false
            },
            name: 'g7',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'pb8',
              color: 'black',
              role: 'pawn',
              src: 'assets/pieces/pawn-b.svg',
              moved: false
            },
            name: 'h7',
            isFieldColorWhite: true
          },
        ],
        [
          {
            name: 'a6',
            isFieldColorWhite: true
          },
          {
            name: 'b6',
            isFieldColorWhite: false
          },
          {
            name: 'c6',
            isFieldColorWhite: true
          },
          {
            name: 'd6',
            isFieldColorWhite: false
          },
          {
            name: 'e6',
            isFieldColorWhite: true
          },
          {
            name: 'f6',
            isFieldColorWhite: false
          },
          {
            name: 'g6',
            isFieldColorWhite: true
          },
          {
            name: 'h6',
            isFieldColorWhite: false
          },
        ],
        [
          {
            name: 'a5',
            isFieldColorWhite: false
          },
          {
            name: 'b5',
            isFieldColorWhite: true
          },
          {
            name: 'c5',
            isFieldColorWhite: false
          },
          {
            name: 'd5',
            isFieldColorWhite: true
          },
          {
            name: 'e5',
            isFieldColorWhite: false
          },
          {
            name: 'f5',
            isFieldColorWhite: true
          },
          {
            name: 'g5',
            isFieldColorWhite: false
          },
          {
            name: 'h5',
            isFieldColorWhite: true
          },
        ],
        [
          {
            name: 'a4',
            isFieldColorWhite: true
          },
          {
            name: 'b4',
            isFieldColorWhite: false
          },
          {
            name: 'c4',
            isFieldColorWhite: true
          },
          {
            name: 'd4',
            isFieldColorWhite: false
          },
          {
            name: 'e4',
            isFieldColorWhite: true
          },
          {
            name: 'f4',
            isFieldColorWhite: false
          },
          {
            name: 'g4',
            isFieldColorWhite: true
          },
          {
            name: 'h4',
            isFieldColorWhite: false
          },
        ],
        [
          {
            name: 'a3',
            isFieldColorWhite: false
          },
          {
            name: 'b3',
            isFieldColorWhite: true
          },
          {
            name: 'c3',
            isFieldColorWhite: false
          },
          {
            name: 'd3',
            isFieldColorWhite: true
          },
          {
            name: 'e3',
            isFieldColorWhite: false
          },
          {
            name: 'f3',
            isFieldColorWhite: true
          },
          {
            name: 'g3',
            isFieldColorWhite: false
          },
          {
            name: 'h3',
            isFieldColorWhite: true
          },
        ],
        [
          {
            piece: {
              name: 'pw1',
              color: 'white',
              role: 'pawn',
              src: 'assets/pieces/pawn-w.svg',
              moved: false
            },
            name: 'a2',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'pw2',
              color: 'white',
              role: 'pawn',
              src: 'assets/pieces/pawn-w.svg',
              moved: false
            },
            name: 'b2',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'pw3',
              color: 'white',
              role: 'pawn',
              src: 'assets/pieces/pawn-w.svg',
              moved: false
            },
            name: 'c2',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'pw4',
              color: 'white',
              role: 'pawn',
              src: 'assets/pieces/pawn-w.svg',
              moved: false
            },
            name: 'd2',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'pw5',
              color: 'white',
              role: 'pawn',
              src: 'assets/pieces/pawn-w.svg',
              moved: false
            },
            name: 'e2',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'pw6',
              color: 'white',
              role: 'pawn',
              src: 'assets/pieces/pawn-w.svg',
              moved: false
            },
            name: 'f2',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'pw7',
              color: 'white',
              role: 'pawn',
              src: 'assets/pieces/pawn-w.svg',
              moved: false
            },
            name: 'g2',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'pw8',
              color: 'white',
              role: 'pawn',
              src: 'assets/pieces/pawn-w.svg',
              moved: false
            },
            name: 'h2',
            isFieldColorWhite: false
          },
        ],
        [
          {
            piece: {
              name: 'rw1',
              color: 'white',
              role: 'rook',
              src: 'assets/pieces/rook-w.svg'
            },
            name: 'a1',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'nw1',
              color: 'white',
              role: 'knight',
              src: 'assets/pieces/knight-w.svg'
            },
            name: 'b1',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'bw1',
              color: 'white',
              role: 'bishop',
              src: 'assets/pieces/bishop-w.svg'
            },
            name: 'c1',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'qw1',
              color: 'white',
              role: 'queen',
              src: 'assets/pieces/queen-w.svg'
            },
            name: 'd1',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'kw1',
              color: 'white',
              role: 'king',
              src: 'assets/pieces/king-w.svg',
              moved: false,
              isChecked: false
            },
            name: 'e1',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'bw2',
              color: 'white',
              role: 'bishop',
              src: 'assets/pieces/bishop-w.svg'
            },
            name: 'f1',
            isFieldColorWhite: true
          },
          {
            piece: {
              name: 'nw2',
              color: 'white',
              role: 'knight',
              src: 'assets/pieces/knight-w.svg'
            },
            name: 'g1',
            isFieldColorWhite: false
          },
          {
            piece: {
              name: 'rw2',
              color: 'white',
              role: 'rook',
              src: 'assets/pieces/rook-w.svg'
            },
            name: 'h1',
            isFieldColorWhite: true
          },
        ]
      ]
    }
  }
}
