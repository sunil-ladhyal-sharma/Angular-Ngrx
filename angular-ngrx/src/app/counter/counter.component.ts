import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { customIncrement, decrement, increment } from './state/counter.action';
import { getChannelName, getCounter } from './state/counter.selector';
import { counterState } from './state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  value:number = 0;
  count:number = 0;
  channelName:string =""
  // count$: Observable<any>;
  constructor(private store : Store <AppState>) {
    // this.count$ =  this.store.select('counter');
    this.store.select(getCounter)
    .subscribe(count => {
      this.count = count;
    })


  }

  counterIncrement() {
    this.store.dispatch(increment())
    
  }

  counterDecrement() {
    this.store.dispatch(decrement());

  }

  counterCustomeIncrement() {
    this.store.dispatch(customIncrement({value : +this.value}));

  }

  showChannelName() {
    this.store.select(getChannelName).subscribe(channelName => {
      this.channelName = channelName;
    })
  }

}
