import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();
let apiKey = '';

export class LastFmAPI {
  getArtists(name) {
    return httpClient.fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=${apiKey}&format=json`);
  }
}
