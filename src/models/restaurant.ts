import { MenuItem } from "./menuItem";
export class Restaurant {
  name: string;
  type: string;
  location: string;
  logoImage: string;

  menu: Array<MenuItem>;
  total: number = 0;

  constructor(name: string, type: string, location?: string, logo?: string) {
    this.name = name;
    this.type = type;
    this.menu = new Array<MenuItem>();
    if (logo != null) this.logoImage = logo;
    if (location != null) this.location = location;
  }

  addMenuItem(name: string, price: number, image: string) {
    const menuItem = new MenuItem(name, price, image);
    this.menu.push(menuItem);
  }

  addMenu(menu: Array<MenuItem>) {
    menu.forEach(item => {
      this.addMenuItem(item.name, item.price, item.image)
    })
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