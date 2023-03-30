import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemClass } from 'src/app/model/itemClass';

@Injectable({
  providedIn: 'root'
})

export class ServerService {

  constructor(private http: HttpClient) {
    
  }

  getItems(): Observable<any> {
    return this.http.get('https://63de507d9fa0d60060fc8e1c.mockapi.io/items')
  }

  getItem(id: string): Observable<any> {
    debugger;
    return this.http.get(`https://63de507d9fa0d60060fc8e1c.mockapi.io/items/${id}`)
  }

  postItem(newItem: ItemClass) {
    // let obj: ItemClass = {
    //   id: 4,
    //   title: "Новый продукт1",
    //   amount: 3,
    //   description: "Данный продукт является молоком в количестве трех штук",
    //   attributes: ["attr1", "attr2", "attr3", "attr4", "attr5"],
    //   shortDescription: "Молоко",
    //   price: 50,
    //   createdAt: new Date(),
    //   image:
    //     "https://kalach-na-donu.diamondelectric.ru/images/3332/3331263/moloko_prostokvashino_yltrapasterizovannoe_32_950_ml_1.jpg",
    // }

    this.http.post<ItemClass>('https://63de507d9fa0d60060fc8e1c.mockapi.io/items', newItem)
      .subscribe(data => {
        debugger;
      })
  }

  patchItem() {
    let obj: ItemClass = {
      id: "1",
      title: "Молоко",
      amount: 3,
      description: "Данный продукт является молоком в количестве трех штук",
      attributes: ["attr1", "attr2", "attr3", "attr4", "attr5"],
      shortDescription: "Молоко",
      price: 50,
      createdAt: new Date(),
      image:
        "https://kalach-na-donu.diamondelectric.ru/images/3332/3331263/moloko_prostokvashino_yltrapasterizovannoe_32_950_ml_1.jpg",
    }

    return this.http.put<ItemClass>('https://63de507d9fa0d60060fc8e1c.mockapi.io/items', obj)
  }

  deleteItem(id: string) {
    debugger
    return this.http.delete<void>(`https://63de507d9fa0d60060fc8e1c.mockapi.io/items/${id}`)
  }
}
