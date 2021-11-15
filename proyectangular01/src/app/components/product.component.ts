//decoredores
import { style } from '@angular/animations';
import { Component,Input,Output, EventEmitter, SimpleChanges,OnChanges,OnInit,DoCheck,OnDestroy }from '@angular/core';
import { Product } from '../product.model'
//uso de decoradores
@Component({
  selector:'app-product',
  templateUrl:'./product.component.html',
  styleUrls:['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit,DoCheck,OnDestroy{
    @Input() product: Product = new Input();
    @Output() productClicked: EventEmitter<any> = new EventEmitter;

    //siclo de vida
    constructor(){
      console.log('1.constructor');
    }

    ngOnChanges(changes:SimpleChanges){
      console.log('2.ngOnChanges')
      console.log(changes)
    }
    ngOnInit(){
      console.log('3.ngOnInit');
    }
    ngDoCheck(){
      console.log('4.Docheck');
    }
    ngOnDestroy(){
      console.log('5.destroy')
    }



    addCart(){
      console.log('aniadido al carrito')
      this.productClicked.emit(this.product.id)//emit = emitir
    }
}
