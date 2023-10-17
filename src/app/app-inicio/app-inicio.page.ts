import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-inicio',
  templateUrl: './app-inicio.page.html',
  styleUrls: ['./app-inicio.page.scss'],
})
export class AppInicioPage implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  passarInformacao(dadosTreino: string) {
    this.dataService.setDadosTreino(dadosTreino);
    this.router.navigate(['/app-treino'])
  }

}
