import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app-treino',
  templateUrl: './app-treino.page.html',
  styleUrls: ['./app-treino.page.scss'],
})
export class AppTreinoPage {
  dadosTreino: any;

  constructor(private dataService: DataService) {
    this.dadosTreino = this.dataService.getDadosTreino()
   }
   


}
