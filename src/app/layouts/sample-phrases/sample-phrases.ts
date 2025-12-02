import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RonWord, RonWordService } from '../../services/ron-word';

@Component({
  selector: 'app-sample-phrases',
  imports: [CommonModule],
  templateUrl: './sample-phrases.html',
  styleUrl: './sample-phrases.css',
})
export class SamplePhrases implements OnInit {

  private readonly ronWordService: RonWordService = inject(RonWordService);
  samplePhrases: RonWord[] = [];

  ngOnInit(): void {
    this.ronWordService.getSamplePhrases().subscribe(samplePhrase => {
      this.samplePhrases = samplePhrase;
    });
  }
}
