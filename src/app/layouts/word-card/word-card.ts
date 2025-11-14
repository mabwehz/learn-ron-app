import { Component, Input } from '@angular/core';
import { RonWord } from '../../services/ron-word';

@Component({
  selector: 'app-word-card',
  imports: [],
  templateUrl: './word-card.html',
  styleUrl: './word-card.css',
})
export class WordCard {
  @Input() ronWord!: RonWord;
}
