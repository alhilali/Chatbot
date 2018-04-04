export class Context {
  name: string;
  order_stats: string;

  constructor() {
  }

  async getPayload(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve({ 'name': this.name, 'order_status': this.order_stats })
    })
  }
}