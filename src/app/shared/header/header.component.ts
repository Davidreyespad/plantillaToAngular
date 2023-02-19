import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPagina } from 'src/app/interfaces/interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private _termino: string = "";
  private _info: InfoPagina = {};

  constructor(private _infoPaginaService: InfoPaginaService,
    private router: Router
  ) { }

  public get infoPaginaService(): InfoPaginaService {
    return this._infoPaginaService;
  }
  public set infoPaginaService(value: InfoPaginaService) {
    this._infoPaginaService = value;
  }


  public get termino(): string {
    return this._termino;
  }
  public set termino(value: string) {
    this._termino = value;
  }


  public get info(): InfoPagina {
    return this._info;
  }
  public set info(value: InfoPagina) {
    this._info = value;
  }

  buscarProducto(termino: string) {
    if (termino.length < 1) { return }
    let busqueda: string = termino;
    this._termino = "";
    this.router.navigate(['/search', busqueda]);
  }

}
