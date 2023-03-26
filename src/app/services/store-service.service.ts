import { Injectable } from '@angular/core';
import { ItemClass } from '../model/itemClass';

interface IState {
  items: ItemClass[]
}

const initialData: ItemClass[] = [
  {
    id: 1,
    title: "Молоко",
    amount: 3,
    description: "Данный продукт является молоком в количестве трех штук",
    attributes: ["attr1", "attr2", "attr3", "attr4", "attr5"],
    shortDescription: "Молоко",
    price: 50,
    addedToCart: true,
    createdAt: new Date(),
    images: [
      "https://kalach-na-donu.diamondelectric.ru/images/3332/3331263/moloko_prostokvashino_yltrapasterizovannoe_32_950_ml_1.jpg",
      "https://davinci-plus.ru/wp-content/uploads/2021/04/free-packaging-milk-carton-mockup.jpg",
      "https://fishki.net/upload/users/2020/05/09/306215/2168330a1b4ce204da954852d8942bc1.jpg",
    ],
  },
  {
    id: 2,
    title: "Хлеб",
    amount: 2,
    description: "Данный продукт явялется хлебом в количестве двух штук",
    attributes: ["attr1", "attr2", "attr3", "attr4", "attr5"],
    shortDescription: "Хлеб",
    price: 30,
    addedToCart: false,
    createdAt: new Date(),
    images: [
      "https://catherineasquithgallery.com/uploads/posts/2021-03/1614572001_74-p-khleb-na-belom-fone-108.jpg",
      "https://dol-hleb.ru/thumb/2/mJcLZMGwWfTJPNjC8sG1LQ/r/d/urozhaj.jpg",
      "https://gubdaily.ru/wp-content/uploads/2020/02/d_hleb.jpg",
    ],
  },
  {
    id: 3,
    title: "Сыр",
    amount: 1,
    description: "Данный продукт является сыром в количестве одной штуки",
    attributes: ["attr1", "attr2", "attr3", "attr4", "attr5"],
    shortDescription: "Сыр",
    price: 250,
    addedToCart: false,
    createdAt: new Date(),
    images: [
      "http://klubmama.ru/uploads/posts/2022-08/1661614043_31-klubmama-ru-p-sir-podelka-foto-35.jpg",
      "https://klike.net/uploads/posts/2020-06/1592378111_2.jpg",
      "https://kartinkin.net/uploads/posts/2021-07/1627089869_8-kartinkin-com-p-kusochek-sira-yeda-krasivo-foto-8.jpg",
    ],
  },
]

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  public state: IState

  constructor() {
    this.state = {
      items: initialData
    }
  }

  // Получить элементы
  getItems(): ItemClass[] {
    return this.state.items;
  }

  // Получить конкретный элемент
  getItem(id: number): ItemClass {
    return this.state.items.filter(item => item.id === id)[0]
  }

  // Добавить элемент
  addItem(newItem: ItemClass): void {
    this.state.items.unshift(newItem)
  }

  // Удаление элемента
  removeItem(id: number): void {
    let index = this.state.items.findIndex((item) => {
      return item.id === id
    })
    this.state.items.splice(index, 1)
  }
}
