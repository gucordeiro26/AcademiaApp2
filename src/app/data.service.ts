import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private dadosTreino: any;

  setDadosTreino(dadosTreino: any) {
    this.dadosTreino = dadosTreino;
  }

  getDadosTreino() {
    return this.dadosTreino;
  }

  private dadosEmail: string;

  setDadosEmail(data: string) {
    this.dadosEmail = data;
  }

  getDadosEmail() {
    return this.dadosEmail;
  }
}
