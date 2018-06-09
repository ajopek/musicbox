import {inject} from 'aurelia-framework';
import {LastFmAPI} from '../../last-fm-api';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(LastFmAPI, EventAggregator)
export class ArtistsList {
  constructor(api, eventAggregator) {
    this.api = api;
    this.ea = eventAggregator;
    this.artistsList = [];
    this.awaitingResults = false;
  }

  loadArtists() {
    this.listLoaded = false;
    this.awaitingResults = true;
    this.api.getArtists(this.searchPhrase)
                 .then(response => response.json())
                 .then(data => {
                   this.artistsList = data.results.artistmatches.artist;
                   this.awaitingResults = false;
                   this.listLoaded = true;
                   console.log(this.artistsList[1]);
                 });
  }

  attached() {
    this.messageReceivedSubscription = this.ea.subscribe('load-artists',
      message => {
        this.searchPhrase = message;
        //console.log(this.searchPhrase);
        this.loadArtists();
      }
    );
  }

  detached() {
    this.messageReceivedSubscription.dispose();
  }
}
