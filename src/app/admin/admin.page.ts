import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
})
export class AdminPage {
  
  constructor() { }
  
  // Conteudo Pagina
  isLoading: boolean = false;
  conteudo: string = 'home';
  iconActive: string = 'gere-outline';
  clientes = [
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
    { nome: 'Caique', email: 'caique@gmail.com', cpf: '1599999999', codigo: '1' },
  ]

  mudarConteudo(nvConteudo: string, nvIcon: string){
    this.conteudo = nvConteudo;
    this.iconActive = nvIcon;
  }

}