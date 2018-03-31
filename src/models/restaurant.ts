import { MenuItem } from "./menuItem";
export class Restaurant {
  name: string;
  menu: Array<MenuItem>;
  logoImage: string;
  location: string;
  total: number = 0;

  constructor(name: string, location?: string, logo?: string) {
    this.name = name;
    this.menu = new Array<MenuItem>();
    if (logo != null) this.logoImage = logo;
    if (location != null) this.location = location;
  }

  addMenuItem(name: string, price: number, image: string) {
    const menuItem = new MenuItem(name, price, image);
    this.menu.push(menuItem);
  }


  setTotal(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      let total = 0;
      this.menu.forEach((item, index) => {
        total += item.price * item.quantitiy
        if (index == this.menu.length - 1) {
          this.total = total;
          resolve(this.total);
        }
      })
    })
  }
}