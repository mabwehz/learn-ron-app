import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RonWord, RonWordService } from '../../services/ron-word';

@Component({
  selector: 'app-full-word-list',
  imports: [CommonModule],
  templateUrl: './full-word-list.html',
  styleUrl: './full-word-list.css'
})
export class FullWordList implements OnInit {

  private readonly ronWordService: RonWordService= inject(RonWordService);
  words: RonWord[] = [];

  ngOnInit(): void {
    this.ronWordService.getWords().subscribe(words => {
    this.words = words; 
  });
  }
}
