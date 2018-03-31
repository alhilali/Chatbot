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

  add() {
    this.quantitiy++;
  }

  remove() {
    if (this.quantitiy > 0)
      this.quantitiy--;
  }
}