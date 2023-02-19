import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina, MiembroEquipo, Producto, ProductoIdx } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  
  private _infoPagina: InfoPagina = {};
  private _equipo!: MiembroEquipo[];
  private _cargando: boolean = false;


  constructor(private http: HttpClient) {
    console.log('Servicio InfoPagina');
    this.http.get('assets/data/david.json').subscribe({
      next: (resp: InfoPagina) => {
        this._infoPagina = resp;
        //console.log(resp);
        console.log(resp['twitter']);
        console.log(resp.twitter);
        //console.log(resp.twitter);
      },
      error: (err) => {
        console.error("Error");
      }
    });

    this.http.get<MiembroEquipo[]>('https://plantillatoangular-a5eaf-default-rtdb.europe-west1.firebasedatabase.app/Equipo.json')
      .subscribe({
        next: (resp: MiembroEquipo[]) => {
          this._cargando = true;
          this._equipo = resp;
        },
        error: (err) => {
          console.error("Error");
        }
      })
  }

  public get infoPagina(): InfoPagina {
    return this._infoPagina;
  }
  public set infoPagina(value: InfoPagina) {
    this._infoPagina = value;
  }

  public get equipo(): MiembroEquipo[] {
    return this._equipo;
  }
  public set equipo(value: MiembroEquipo[]) {
    this._equipo = value;
  }

  public get cargada(): boolean {
    return this._cargando;
  }
  public set cargada(value: boolean) {
    this._cargando = value;
  }


}


/* constructor(private http: HttpClient) {
  console.log('Servicio InfoPagina');
  this.http.get('assets/data/david.json').subscribe((
    resp: any) => {
    //console.log(resp);
    console.log(resp['twitter']);
    //console.log(resp.twitter);
  });
} */
