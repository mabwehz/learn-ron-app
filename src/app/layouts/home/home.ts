import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RonWord, RonWordService } from '../../services/ron-word';
import { RON_ALPHABETS } from '../../shared/defaults';
import { WordCard } from '../word-card/word-card';

interface AlphabetWordMap {
  [key: string]: RonWord[];
}
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink,  WordCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private readonly ronWordService: RonWordService= inject(RonWordService);
  words: RonWord[] = [];
  public readonly alphabets = RON_ALPHABETS;
  public transformedAlphabetsWordList: AlphabetWordMap = {};

  ngOnInit(): void {
    this.ronWordService.getWords().subscribe(words => {
    this.words = words; 

      for (const char of this.alphabets) {
        this.transformedAlphabetsWordList[char] = this.words
          .filter((word) => word.ron.toLowerCase().startsWith(char.toLowerCase()));
      };

  });
  }
}
