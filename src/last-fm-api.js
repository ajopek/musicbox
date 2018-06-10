import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();
let apiKey = '';

export class LastFmAPI {
  getArtists(name, page) {
    return httpClient.fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&page=${page}&artist=${name}&api_key=${apiKey}&format=json`);
  }

  getArtistAlbums(name) {
    return httpClient.fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${apiKey}&format=json`);
  }

  getArtistBio(name) {
    console.log(`loading ${name}`);
    return httpClient.fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${apiKey}&format=json`);
  }
}
