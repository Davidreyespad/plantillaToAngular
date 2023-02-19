import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _infoPaginaService: InfoPaginaService) { }

  public get infoPaginaService(): InfoPaginaService {
    return this._infoPaginaService;
  }
  public set infoPaginaService(value: InfoPaginaService) {
    this._infoPaginaService = value;
  }

  ngOnInit(): void {
  }

}
