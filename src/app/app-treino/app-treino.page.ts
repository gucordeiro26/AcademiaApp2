import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app-treino',
  templateUrl: './app-treino.page.html',
  styleUrls: ['./app-treino.page.scss'],
})
export class AppTreinoPage implements OnInit {
  dadosTreino: any;

  constructor(private dataService: DataService) {
    this.dadosTreino = this.dataService.getDadosTreino()
   }

  ngOnInit() {
  }
}
