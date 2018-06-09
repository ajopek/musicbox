import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Search';
    config.map([
      { route: '',              moduleId: PLATFORM.moduleName('./views/search-box/search-box'),           title: 'Search' },
      { route: 'artist/:id',    moduleId: PLATFORM.moduleName('./views/artist-details/artist-details'),   name: 'Artists' }
    ]);

    this.router = router;
  }
}
