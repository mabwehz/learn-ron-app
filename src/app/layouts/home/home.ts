import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RonWord, RonWordService } from '../../services/ron-word';
import { WordCard } from '../word-card/word-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink,  WordCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private ronWordService: RonWordService= inject(RonWordService);
  words: RonWord[] = [];

  ngOnInit(): void {
    this.ronWordService.getWords().subscribe(words => {
    this.words = words; 
  });
  }
}
