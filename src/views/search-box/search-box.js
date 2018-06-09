import {LastFmAPI} from '.../../last-fm-api';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class SearchBox {
  constructor(eventAggregator) {
    this.ea = eventAggregator;
    this.input = '';
    this.changedEvent = false; // Did change DOM event happen
  }

  sendMessage() {
    this.ea.publish('load-artists', this.input);
  }

  inputKeyup() {
    if (this.input.length >= 3 && !this.changedEvent) {
      console.log('Yey'); // Message event here
      this.sendMessage();
    }
  }

  inputChange() {
    this.changedEvent = true;
    this.sendMessage();
    console.log('Yey'); //Message event here
    this.changedEvent = false;
  }


}
