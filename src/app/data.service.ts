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

  // pegar email
  private dadosEmail: string

  setDadosEmail(data: string) {
    this.dadosEmail = data
  }

  getDadosEmail() {
    return this.dadosEmail
  }

  // pegar id

  private dadosId: number

  setDadosId(data: number){
    this.dadosId = data
  }

  getDadosId(){
    return this.dadosId
  }

  // pegar nome do plano
  private dadosNomePlano: any

  setDadosNomePlano(data: any){
    this.dadosNomePlano = data
  }

  getDadosNomePlano(){
    return this.dadosNomePlano
  }

  private adminId: number

  setAdminId(data: number){
    this.adminId = data
  }

  getAdminId(){
    return this.adminId
  }
}
