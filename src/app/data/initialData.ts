import { ItemClass } from "../model/itemClass";

const initialData: ItemClass[] = [
  {
    id: '1',
    title: 'Молоко',
    amount: 3,
    description: 'Данный продукт является молоком в количестве трех штук',
    attributes: ['attr1', 'attr2', 'attr3', 'attr4', 'attr5'],
    shortDescription: 'Молоко',
    price: 50,
    createdAt: new Date(),
    image:
      'https://kalach-na-donu.diamondelectric.ru/images/3332/3331263/moloko_prostokvashino_yltrapasterizovannoe_32_950_ml_1.jpg',
  },
  {
    id: '2',
    title: 'Хлеб',
    amount: 2,
    description: 'Данный продукт явялется хлебом в количестве двух штук',
    attributes: ['attr1', 'attr2', 'attr3', 'attr4', 'attr5'],
    shortDescription: 'Хлеб',
    price: 30,
    createdAt: new Date(),
    image:
      'https://catherineasquithgallery.com/uploads/posts/2021-03/1614572001_74-p-khleb-na-belom-fone-108.jpg',
  },
  {
    id: '3',
    title: 'Сыр',
    amount: 1,
    description: 'Данный продукт является сыром в количестве одной штуки',
    attributes: ['attr1', 'attr2', 'attr3', 'attr4', 'attr5'],
    shortDescription: 'Сыр',
    price: 250,
    createdAt: new Date(),
    image:
      'http://klubmama.ru/uploads/posts/2022-08/1661614043_31-klubmama-ru-p-sir-podelka-foto-35.jpg',
  },
];
