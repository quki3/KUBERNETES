data binding
->creamos un imputs en 

app.component.html
ngModel es una directiva que trabaja en los formularios 
```html
<input type="text" [(ngModel)]="title">
```
para que esto funcione tenemos que agregarlo en app.module.ts
```ts
import {FormsModule} from "@angular/forms"

@NgModule({
  imports:[
    FormsModule
  ]
})
```
condicionales dentro de un template *ngif
```ts
<div *ngif="1===1">
esto es un div
</div>
```
iterar un array primeri creamos el array en app components
```ts
export class AppComponent {
  title = 'proyectangular01';

  items=['nicoles','juliasn','peres']
}

```
y en el app.componente.html 
```ts
<ul>
  <li *ngfor="let name of items">
    {{name}}
  </li>
</ul>
```
como agregamos items vamos a app.componente.html y creamos un button este button tiene una funcion
```ts
<button (click)="addItem()">Add item</button>
```
la funcion la creamos en app.component.ts
```ts
export class AppComponent {
  title = 'proyectangular01';

  items=['nicoles','juliasn','peres']

  addItem(){
    this.items.push('nuevo item')
  }
}
```
para eliminar items creamos otra funcion en app.component.ts
```ts
export class AppComponent {
  title = 'proyectangular01';

  items=['nicoles','juliasn','peres']

  addItem(){
    this.items.push('nuevo item')
  }
  deleteItem(index:number){
    this.items.splice(index,1);
  }
}
```
y acomodamos un poco el app.component.html
```ts
<ul>
  <li *ngFor="let name of items; index as i">
    {{name}}
    <button (click)="deleteItem(i)">delete</button>
  </li>
</ul>
```
corroborar si la lista esta vacia
```ts
<ul>
  <li *ngIf="items.length === 0">la lista esta vacia</li>
  <li *ngFor="let name of items; index as i">
    {{name}}
    <button (click)="deleteItem(i)">delete</button>
  </li>
</ul>
```
recorrer objetos creamos el objeto en app.component.ts
```ts
export class AppComponent {
  title = 'proyectangular01';

  items=['nicoles','juliasn','peres']

  products = [
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
}
```
lo recorremos en app.component.html
```ts
<div *ngFor="let product of products">
  {{product.title}}
  <img [src]="product.image">
  {{product.price}}
</div>
```
una buena practica es tipar nuestros objetos creamos un nuevo archivo 
app/product.model.ts
```ts
export interface Product {
  id:string;
  title:string;
  price:number;
  description:string
}
```
importamos esto en app.component.ts
```ts
import {Product} from './product.model';
```
para tipar los productos en app.component.ts
```ts
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
```
ngSwitch veamos como trabaja
```ts
<div [ngSwitch]="title">
  <p *ngSwitchCase="'nicolas'">este es nicoles</p>
  <p *ngSwitchCase="'julian'">este es julian</p>
  <p *ngSwitchCase="'camilo'">este es camilo</p>
  <p *ngSwitchDefault="">no hay match</p>
</div>
```
buenas practicas con muchos archivos (componentes) creamos la carpeta 
app/components/product.component.ts
```ts
//decoredores
import { Component }from '@angular/core';

//uso de decoradores
@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent{

}
```
creamos el archivo app/components/product.component.html
-> y para que angular reconoscaeste modulo comonente lo agregamos a app.module.ts
```ts
import {ProductComponent} from './components/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
```
para usarlo teenmos que llamar el selector del componente en app.componente.html
```html
<app-product></app-product>
```
-> acomodamos un poco el product.component.ts
```ts
//decoredores
import { Component }from '@angular/core';
import { Product } from '../product.model'
//uso de decoradores
@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent{
    product:Product = {
      id:'2',
      image:'assets/images/ban.png',
      title:'imagen',
      price:2000,
      description:'esto es una imagen'
    }
}

```
-> como enviamos datos por medio de input
->vamos al componente Product.componet.ts y lo importamos de angular core
```ts
//decoredores
import { Component,Input }from '@angular/core';
import { Product } from '../product.model'
//uso de decoradores
@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent{
    @Input() product: Product = new Input();
}
```
->ahora este componente va a recivir otra propiedad desde otro componente
como lo usamos a ese input en app.component.html
```html
<div *ngFor="let product of products">
  <app-product [product]="product"></app-product>
</div>
```
-> tambien tenemos output como el de click agregamos un button con el metodo click y la funcion que agregamos en el componente funcional al html del component
```html
<button (click)="addCart()"> add Cart</button>
```
product.component.ts
```ts
export class ProductComponent{
    @Input() product: Product = new Input();

    addCart(){
      console.log('aniadido al carrito')
    }
}
```
si queremos desde al app component saver cuando le dan click a un producto 
->importamos Output u Eventemiter en product.component.ts
```ts
//decoredores
import { Component,Input,Output, EventEmitter }from '@angular/core';
import { Product } from '../product.model'
//uso de decoradores
@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent{
    @Input() product: Product = new Input();
    @Output() productClicked: EventEmitter<any> = new EventEmitter;

    addCart(){
      console.log('aniadido al carrito')
      this.productClicked.emit(this.product.id)//emit = emitir
    }
}
```
-> como lo usamos en el componente padre vamos a app.component.html 
```html
<div *ngFor="let product of products">
  <app-product (productClicked)="clickProduct($event)" [product]="product"></app-product>
</div>
<!--$event no enite el valor del eventEmiter-->
```
creamos un metodo que lo lea en el componente padre app.componet.ts

```ts
clickProduct(id:number){
    console.log('product',id)
  }
```
-> siclo de vida de un componente
1.constructor 
2.ngOnchanges -? los cambios que tengamos 
3.ngOnInit -? solo se llama una ves podria incluir llamada a restAPI
4.ngDoCheck -? cuando hijos son creados 
`ngAfterContentInit
 ngAfterContentChecked
 ngAfterViewInit
 ngAfterViewChecked`
5.ngOnDestroy

-> iniciamos el siclo de vida en product.componet.ts
```ts
 constructor(){
      console.log('constructor');
    }
```
-> sigiendo con el siclo de vida
```ts
import { Component,Input,Output, EventEmitter, SimpleChanges,OnChanges }from '@angular/core';
export class ProductComponent implements OnChanges
ngOnChanges(changes:SimpleChanges){
      console.log('ngOnChanges')
      console.log(changes)
    }
```
-> sigiendo con el siclo de vida ngOnInit
```ts
import { Component,Input,Output, EventEmitter, SimpleChanges,OnChanges,OnInit }from '@angular/core';
ngOnInit(){
      console.log('3.ngOnInit');
    }
```
->el siguiente es ngDoCheck que se usa para detectar cambios de manera mas explicita aveses colicina con onchanges
```ts
import { Component,Input,Output, EventEmitter, SimpleChanges,OnChanges,OnInit,DoCheck }from '@angular/core';

export class ProductComponent implements OnChanges, OnInit,DoCheck
ngDoCheck(){
      console.log('4.Docheck');
    }
```
-> por ultimo esta en ngOnDEstroy cuando un elemento es remivido se siguen los mismos pasos anteriores

--> agregando css a el proyecto creamos app/comonents/product.component.scss

```css

```
-> y hacemos referencia a el desde product.componet.ts
```ts
@Component({
  selector:'app-product',
  templateUrl:'./product.component.html',
  styleUrls:['./product.component.scss']
})

```
-> ng generate component nombredelcomponente
`ng g c cart`

