import { Component, inject } from '@angular/core';
import { RonWord, RonWordService } from '../../services/ron-word';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-full-word-list',
  imports: [CommonModule],
  templateUrl: './full-word-list.html',
  styleUrl: './full-word-list.css'
})
export class FullWordList {

  private ronWordService: RonWordService= inject(RonWordService);
  words: RonWord[] = [];

  ngOnInit(): void {
    this.ronWordService.getWords().subscribe(words => {
    this.words = words; 
  });
  }
}
