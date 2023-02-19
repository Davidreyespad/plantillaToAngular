import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/interface';
import { ProductoService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  private _producto: Producto = {};
  private _id: any = {};
  

  constructor(private route: ActivatedRoute,
    private productoService: ProductoService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(parametros=>{
      this.id= parametros['id'];
      console.log(parametros['id']);
      this.productoService
      .getProducto(parametros['id'])
      .subscribe((resp: Producto)=>{
        this._producto = resp;
        console.log('Dato recibido: ' +this._producto.producto);
      });
      console.log(this._producto);
    })
  }

  public get producto(): Producto {
    return this._producto;
  }
  public set producto(value: Producto) {
    this._producto = value;
  }

  public get id(): any {
    return this._id;
  }
  public set id(value: any) {
    this._id = value;
  }




}
