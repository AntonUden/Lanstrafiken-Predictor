import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  readonly reasons = ["Signalfel", "Växelfel", "Obehöriga på spåret", "Spårarbete", "Personalbrist", "Dörrfel", "Tågförsening"];
  stopped = false;
  index = 0;
  interval?: any;

  get reason() {
    return this.reasons[this.index];
  }

  next() {
    this.index = (this.index + 1) % this.reasons.length;
  }

  toggle() {
    this.stopped = !this.stopped;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (!this.stopped) {
        this.next();
      }
    }, 100);
  }

}
