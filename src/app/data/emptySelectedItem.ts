import { ItemClass } from "../model/itemClass";

export const emptySelectedItem: ItemClass = {
  id: 'empty',
  title: 'empty',
  amount: 0,
  description: 'empty',
  attributes: [],
  shortDescription: 'empty',
  price: 0,
  createdAt: new Date(),
  image: 'empty',
};
