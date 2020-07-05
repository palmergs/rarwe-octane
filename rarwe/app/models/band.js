import { tracked } from '@glimmer/tracking';
import { dasherize } from '@ember/string';

export default class Band {
  @tracked name;
  @tracked songs;

  constructor({ name, songs }) {
    this.name = name;
    this.slug = dasherize(name);
    this.songs = songs ?? [];
  }
}
