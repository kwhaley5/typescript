import { Component, effect, OnDestroy, OnInit,signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline')
  private interval?: number

  constructor () {
    effect(() => {
      //signal subscription
    })
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online')
      } else if (rnd < 0.9) {
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline')
      } else {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown')
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval)
  }
}
