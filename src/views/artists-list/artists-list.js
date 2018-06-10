import {inject, singleton} from 'aurelia-framework';
import {LastFmAPI} from '../../last-fm-api';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';

@singleton()
@inject(LastFmAPI, EventAggregator, Router)
export class ArtistsList {
  constructor(api, eventAggregator, router) {
    this.api = api;
    this.ea = eventAggregator;
    this.artistsList = [];
    this.awaitingResults = false;
    this.router;
  }

  loadArtists(page) {
    this.listLoaded = false;
    this.awaitingResults = true;
    this.api.getArtists(this.searchPhrase, page)
                 .then(response => response.json())
                 .then(data => {
                   this.lastResult = data.results;
                   this.artistsList = data.results.artistmatches.artist;
                   this.currentPage = page;
                   this.awaitingResults = false;
                   this.listLoaded = true;
                   console.log(this.artistsList[2].image[2]['#text']);
                 });
  }

  hasNext() {
    return ((this.lastResult['opensearch:itemsPerPage'] * this.currentPage) < this.lastResult['opensearch:totalResults']);
  }

  hasPrev() {
    return (this.currentPage > 1);
  }

  loadNext() {
    this.loadArtists(this.currentPage + 1);
  }

  loadPrev() {
    this.loadArtists(Math.max(1, this.currentPage - 1));
  }

  attached() {
    this.messageReceivedSubscription = this.ea.subscribe('load-artists',
      message => {
        this.searchPhrase = message;
        //console.log(this.searchPhrase);
        this.loadArtists(1);
      }
    );
  }

  detached() {
    this.messageReceivedSubscription.dispose();
  }
}
