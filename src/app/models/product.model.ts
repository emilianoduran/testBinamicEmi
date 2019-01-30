export class Product {
  public id?: string;

  constructor(
    public name: string,
    public description: string,
    public price: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
