import {inject} from 'aurelia-framework';
import { LastFmAPI } from '../../last-fm-api';

@inject(LastFmAPI)
export class ArtistDetails {
  constructor(api) {
    this.api = api;
    this.selectedAlbum = '';
  }

  select(name) {
    this.selectedAlbum = name;
    console.log(this.selectedAlbum);
  }

  back() {
    history.back();
  }

  async activate(params, routeConfig) {
    console.log(`loading ${params.name}`);
    this.name = params.name;
    await this.api.getArtistBio(params.name)
                 .then(response => response.json())
                 .then(data => {
                   this.artistBio = data.artist.bio.summary;
                 });
    await this.api.getArtistAlbums(params.name)
                 .then(response => response.json())
                 .then(data => {
                   this.albums = data.topalbums.album;
                 });
  }
}
