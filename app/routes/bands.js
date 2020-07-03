import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class Band {
  @tracked name;

  constructor({ name, slug, songs }) {
    this.name = name;
    this.slug = slug;
    this.songs = songs;
  }
}

class Song {
  title = '';
  rating = 0;
  band = '';

  constructor({ title, rating, band }) {
    this.title = title;
    this.rating = rating;
    this.band = band;
  }
}

export default class BandsRoute extends Route {
  model() {
    const blackDog = new Song({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });

    const yellowLedbetter = new Song({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });

    const pretender = new Song({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    const daughter = new Song({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5
    });

    return [
      new Band({ name: 'Led Zeppelin', slug: 'led-zeppelin', songs: [blackDog]}),
      new Band({ name: 'Pearl Jam', slug: 'pearl-jam', songs: [yellowLedbetter, daughter] }),
      new Band({ name: 'Foo Fighters', slug: 'foo-fighters', songs: [pretender] })
    ];
  }
}
