import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
