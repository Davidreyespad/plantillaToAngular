import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) {
    console.log('Servicio InfoPagina');
    this.http.get('assets/data/david.json').subscribe((resp: any) => {
      //console.log(resp);
      console.log(resp['twitter']);
      //console.log(resp.twitter);
    });
  }
}