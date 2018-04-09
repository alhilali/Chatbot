export class MenuItem {
  name: string;
  price: number;
  quantitiy: number;
  image: string;

  constructor(name: string, price: number, image?: string) {
    this.name = name;
    this.price = price;
    this.quantitiy = 0;
    if (image != null) this.image = image;
  }

  add(num: number) {
    this.quantitiy += num;
  }

  set(num: number) {
    this.quantitiy = num;
  }

  remove() {
    if (this.quantitiy > 0)
      this.quantitiy--;
  }
}