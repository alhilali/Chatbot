import { Restaurant } from "./restaurant";
export class Message {
  content: string;
  isWatson: boolean;
  timestamp: string;
  type: string;
  restaurant?: Restaurant;

  constructor(content: string, isWatson: boolean,
    type?: string) {
    this.content = content;
    this.isWatson = isWatson;
    const date = new Date();
    this.timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    if (type != null) {
      this.type = type;
    } else this.type = 'regular';
  }

  setRestaurant(restaurant: Restaurant) {
    this.restaurant = restaurant;
  }
}