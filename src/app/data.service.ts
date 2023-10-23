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

  private modalLogin: any;

  setCloseModalLogin(data: any) {
    this.modalLogin = data;
  }

  getCloseModalLogin() {
    return this.modalLogin;
  }
}
