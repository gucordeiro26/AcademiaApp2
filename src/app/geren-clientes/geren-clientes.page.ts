import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geren-clientes',
  templateUrl: './geren-clientes.page.html',
  styleUrls: ['./geren-clientes.page.scss'],
})
export class GerenClientesPage implements OnInit {

clientes = [
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
  { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' }
]

  ngOnInit() {
  }

}
