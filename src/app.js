import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Search';
    config.map([
      { route: '',               moduleId: PLATFORM.moduleName('views/home/home'),           title: 'Search' },
      { route: 'artists/:name',  moduleId: PLATFORM.moduleName('views/artist-details/artist-details'), name: 'artists'}
    ]);

    this.router = router;
  }
}
