import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { RON_WORD_MOCK_DATA } from './ron-word.mock-data';

export interface RonWord {
  id?: string;
  ron: string;
  english: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class RonWordService {

  private words$ = new BehaviorSubject<RonWord[]>(RON_WORD_MOCK_DATA);

  constructor() { }

  // Get all words
  getWords(): Observable<RonWord[]> {
    return this.words$.asObservable();
  }

  // Get a specific word by id
  findWord(english: string): RonWord | undefined {
    return this.words$.value.find(word => word.english === english);
  }

  // Create a new word
  createWord(word: RonWord): void {
    const newWord = { ...word, id: Date.now().toString(), createdAt: new Date() };
    this.words$.next([...this.words$.value, newWord]);
  }

  // Update an existing word
  updateWord(id: string, updates: Partial<RonWord>): void {
    const words = this.words$.value.map(word =>
      word.id === id ? { ...word, ...updates, updatedAt: new Date() } : word
    );
    this.words$.next(words);
  }

  // Get top N words (most recent or by frequency)
  getTopWords(limit: number = 10): RonWord[] {
    return this.words$.value.slice(0, limit);
  }
}