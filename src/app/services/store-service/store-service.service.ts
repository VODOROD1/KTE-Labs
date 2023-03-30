import { Injectable } from '@angular/core';
import { ItemClass } from '../../model/itemClass';
import { ServerService } from '../server-service/server-service.service';

interface IState {
  items: ItemClass[];
  selectedItem: ItemClass;
}

// let obj = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: {
//       "rate": 3.9,
//       "count": 120
//   }
// }

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

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public state: IState;

  constructor(private serverService: ServerService) {
    this.state = {
      items: [],
      selectedItem: null,
    };
  }

  // Получить элементы
  getItems(): ItemClass[] {
    this.serverService.getItems().subscribe((res: any) => {
      this.state.items.push(...res);
    });

    return this.state.items;
  }

  // Получить конкретный элемент
  getItem(id: string): ItemClass {
    this.serverService.getItem(id).subscribe((res: any) => {
      debugger;
      // this.state.items.push(...res)
      this.state.selectedItem = res;
      // GET ITEM
      debugger;
    });
    debugger;
    return this.state.selectedItem;

    // return this.state.items.filter(item => item.id === id)[0]
  }

  // Добавить элемент
  addItem(newItem: ItemClass): void {
    // this.state.items.unshift(newItem)
    debugger;
    this.serverService.postItem(newItem);
  }

  // Удаление элемента
  removeItem(id: any): void {
    debugger;
    // let index = this.state.items.findIndex((item) => {
    //   return item.id === id
    // })
    // this.state.items.splice(index, 1)
    this.serverService.deleteItem(id).subscribe(
      () => {
        let index = this.state.items.findIndex((item) => {
          return item.id === id;
        });
        this.state.items.splice(index, 1);
      },
      (error) => {}
    );
  }
}
