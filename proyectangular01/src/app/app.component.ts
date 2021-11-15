import { Component } from '@angular/core';
import {Product} from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyectangular01';

  items=['nicoles','juliasn','peres']

  products:Product[] = [
    {
      id:'1',
      image:'assets/images/004.png',
      title:'imagen',
      price:1000,
      description:'esto es una imagen'
    },{
      id:'2',
      image:'assets/images/ban.png',
      title:'imagen',
      price:2000,
      description:'esto es una imagen'
    }
  ];

  addItem(){
    this.items.push('nuevo item')
  }
  deleteItem(index:number){
    this.items.splice(index,1);
  }

  clickProduct(id:number){
    console.log('product',id)
  }
}
