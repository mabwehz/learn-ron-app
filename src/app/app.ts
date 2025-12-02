import { CommonModule } from '@angular/common';
import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-ron-app');
  protected readonly showScrollToTop = signal(false);
  private readonly scrollThreshold = 300; 

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollToTop.set(window.scrollY > this.scrollThreshold);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
