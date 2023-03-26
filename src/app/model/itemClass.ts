export class ItemClass {
  id: number;
  title: string;
  amount: number;
  description: string;
  attributes: string[];
  shortDescription: string;
  price: number;
  addedToCart: boolean;
  createdAt: Date;
  images: string[];

  constructor(
    id: number,
    title: string,
    amount: number,
    description: string,
    shortDescription: string,
    attributes: string[],
    price: number,
    addedToCart: boolean,
    createdAt: Date,
    images: string[]
    ) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.description = description;
    this.shortDescription = shortDescription;
    this.attributes = attributes;
    this.price = price;
    this.addedToCart = addedToCart;
    this.createdAt = createdAt;
    this.images = images;
  }
}
