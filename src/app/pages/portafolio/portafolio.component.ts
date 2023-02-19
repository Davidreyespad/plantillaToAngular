import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( private _productoService: ProductoService) { }

  public get productoService(): ProductoService {
    return this._productoService;
  }
  public set productoService(value: ProductoService) {
    this._productoService = value;
  }


  ngOnInit(): void {
  }

}
