import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscribe => {
      subscribe.unsubscribe();
    });
  }

  public addSubscribe(subscribe: Subscription | Subscription[]) {
    this._subscriptions.concat(subscribe);
  }

}
