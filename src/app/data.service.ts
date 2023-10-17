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

  private sharedData: any;

  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData() {
    return this.sharedData;
  }
}
