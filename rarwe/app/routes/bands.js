import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/song';

export default class BandsRoute extends Route {
  @service catalog;

  model() {
    const blackDog = new Song({ title: 'Black Dog', rating: 3 });
    const yellowLedbetter = new Song({ title: 'Yellow Ledbetter', rating: 4 });
    const pretender = new Song({ title: 'The Pretender', rating: 2 });
    const daughter = new Song({ title: 'Daughter', rating: 5 });

    const ledZeppelin = new Band({ name: 'LedZeppelin', songs: [blackDog] });
    const pearlJam = new Band({ name: 'Pearl Jam', songs: [yellowLedbetter, pretender] });
    const fooFighters = new Band({ name: 'Foo Fighters', songs: [daughter] });

    blackDog.band = ledZeppelin;
    yellowLedbetter.band = pearlJam;
    daughter.band = pearlJam;
    pretender.band = fooFighters;

    this.catalog.add('band', ledZeppelin);
    this.catalog.add('band', pearlJam);
    this.catalog.add('band', fooFighters);
    return this.catalog.bands
  }
}
