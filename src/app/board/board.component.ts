import {Component, Input} from '@angular/core';
import {IBoard} from "../classes/IBoard";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @Input() board!: IBoard;

  test(input: any) {
    console.log(input)
  }
}
