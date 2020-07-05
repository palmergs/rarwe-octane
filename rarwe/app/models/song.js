import { tracked } from '@glimmer/tracking';

export default class Song {
  title = '';
  rating = 0;
  band = null;
  
  constructor({ title, rating }) {
    this.title = title;
    this.rating = rating;
  }
}
