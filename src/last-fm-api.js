import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();
let apiKey = '9509f7bbf1f838f74b0da8bf97193ae4';

export class LastFmAPI {
  getArtists(name) {
    return httpClient.fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=${apiKey}&format=json`);
  }

  getArtistAlbums(name) {
    return httpClient.fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${apiKey}&format=json`);
  }

  getArtistBio(name) {
    console.log(`loading ${name}`);
    return httpClient.fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${apiKey}&format=json`);
  }
}
